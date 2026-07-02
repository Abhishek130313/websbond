<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Key');

$adminKey = getenv('ADMIN_KEY') ?: 'websbond-admin-2024';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// GET — return stored leads for admin dashboard
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $key = $_GET['key'] ?? '';
    if ($key !== $adminKey) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid admin key']);
        exit;
    }

    $logDir = __DIR__ . '/leads';
    $allLeads = [];
    if (is_dir($logDir)) {
        $files = glob($logDir . '/*.json');
        sort($files);
        foreach ($files as $file) {
            $leads = json_decode(file_get_contents($file), true) ?? [];
            foreach ($leads as $lead) {
                $allLeads[] = $lead;
            }
        }
    }

    usort($allLeads, function ($a, $b) {
        return strcmp($b['submittedAt'] ?? '', $a['submittedAt'] ?? '');
    });

    $result = [];
    foreach ($allLeads as $i => $lead) {
        $result[] = [
            'id'          => $i + 1,
            'name'        => $lead['name'] ?? '',
            'email'       => $lead['email'] ?? '',
            'phone'       => $lead['phone'] ?? '',
            'subject'     => $lead['subject'] ?? '',
            'message'     => $lead['message'] ?? '',
            'submittedAt' => $lead['submittedAt'] ?? '',
        ];
    }

    echo json_encode($result);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['name']) || empty($input['email']) || empty($input['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name    = substr($input['name'], 0, 255);
$email   = substr($input['email'], 0, 255);
$phone   = substr($input['phone'], 0, 50);
$subject = substr($input['subject'] ?? 'No Subject', 0, 255);
$message = substr($input['message'] ?? '', 2000);
$submittedAt = date('Y-m-d H:i:s');

// Store in JSON log file
$logDir = __DIR__ . '/leads';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}

$entry = [
    'id'          => uniqid('lead_', true),
    'name'        => $name,
    'email'       => $email,
    'phone'       => $phone,
    'subject'     => $subject,
    'message'     => $message,
    'submittedAt' => $submittedAt,
];

$logFile = $logDir . '/' . date('Y-m-d') . '.json';
$leads = [];
if (file_exists($logFile)) {
    $leads = json_decode(file_get_contents($logFile), true) ?? [];
}
$leads[] = $entry;
file_put_contents($logFile, json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Send email notification
$to = 'websbond@websbond.com';
$emailSubject = "New Lead: $subject";
$emailBody = "New lead received:\n\nName: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message\nSubmitted: $submittedAt\n";
$headers = "From: noreply@websbond.com\r\nReply-To: $email";

if (mail($to, $emailSubject, $emailBody, $headers)) {
    $emailSent = true;
} else {
    $emailSent = false;
}

http_response_code(200);
echo json_encode([
    'success'   => true,
    'id'        => $entry['id'],
    'email_sent' => $emailSent,
]);
