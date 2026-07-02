package com.websbond.api.controller;

import com.websbond.api.NotificationService;
import com.websbond.api.model.ContactSubmission;
import com.websbond.api.repository.ContactSubmissionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactSubmissionRepository repository;
    private final NotificationService notificationService;

    @Autowired
    public ContactController(ContactSubmissionRepository repository, NotificationService notificationService) {
        this.repository = repository;
        this.notificationService = notificationService;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContactBrief(@Valid @RequestBody ContactSubmission submission) {
        // Save to DB
        ContactSubmission saved = repository.save(submission);

        // Fire-and-forget notification (doesn't block the response)
        CompletableFuture.runAsync(() ->
            notificationService.notifyNewContact(
                saved.getName(),
                saved.getEmail(),
                saved.getPhone(),
                saved.getSubject(),
                saved.getMessage()
            )
        );

        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Contact brief submitted successfully!");
        response.put("id", String.valueOf(saved.getId()));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin/contacts")
    public ResponseEntity<List<ContactSubmission>> getAllContacts() {
        List<ContactSubmission> submissions = repository.findAll();
        return ResponseEntity.ok(submissions);
    }
}
