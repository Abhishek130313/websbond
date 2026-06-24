<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
$email = trim($input["email"] ?? "");

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

$to = "hello@websbond.com";
$headers = "From: newsletter@websbond.com\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n";
$body = "New subscriber: $email";

$ok = mail($to, "Websbond Newsletter: $email", $body, $headers);

if ($ok) {
    echo json_encode(["status" => "success", "message" => "Subscribed successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to subscribe"]);
}
