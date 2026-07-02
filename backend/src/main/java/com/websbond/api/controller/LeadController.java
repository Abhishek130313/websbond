package com.websbond.api.controller;

import com.websbond.api.model.LeadSubmission;
import com.websbond.api.repository.LeadSubmissionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class LeadController {

    private final LeadSubmissionRepository repository;

    @Autowired
    public LeadController(LeadSubmissionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/leads")
    public ResponseEntity<Map<String, String>> submitLead(@Valid @RequestBody LeadSubmission lead) {
        LeadSubmission saved = repository.save(lead);

        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Quote request received successfully!");
        response.put("id", String.valueOf(saved.getId()));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin/leads")
    public ResponseEntity<List<LeadSubmission>> getAllLeads() {
        return ResponseEntity.ok(repository.findAll());
    }
}
