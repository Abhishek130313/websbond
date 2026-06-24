package com.websbond.api.controller;

import com.websbond.api.model.ContactSubmission;
import com.websbond.api.repository.ContactSubmissionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactSubmissionRepository repository;

    @Value("${admin.secret-key:websbond-admin-2024}")
    private String adminSecretKey;

    @Autowired
    public ContactController(ContactSubmissionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContactBrief(@Valid @RequestBody ContactSubmission submission) {
        ContactSubmission saved = repository.save(submission);

        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Contact brief submitted successfully!");
        response.put("id", String.valueOf(saved.getId()));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin/contacts")
    public ResponseEntity<?> getAllContacts(@RequestHeader(value = "X-Admin-Key", required = false) String adminKey) {
        if (adminKey == null || !adminKey.equals(adminSecretKey)) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Unauthorized");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(err);
        }
        List<ContactSubmission> submissions = repository.findAll();
        return ResponseEntity.ok(submissions);
    }
}
