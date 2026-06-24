package com.websbond.api.controller;

import com.websbond.api.model.ContactSubmission;
import com.websbond.api.repository.ContactSubmissionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactSubmissionRepository repository;

    @Autowired
    public ContactController(ContactSubmissionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContactBrief(@Valid @RequestBody ContactSubmission submission) {
        // Save submission to H2 Database
        ContactSubmission saved = repository.save(submission);
        
        // Build JSON response
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Contact brief submitted successfully!");
        response.put("id", String.valueOf(saved.getId()));
        
        return ResponseEntity.ok(response);
    }
}
