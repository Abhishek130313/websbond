package com.websbond.api.controller;

import com.websbond.api.model.ClientReview;
import com.websbond.api.repository.ClientReviewRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ReviewController {

    private final ClientReviewRepository repository;

    @Autowired
    public ReviewController(ClientReviewRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/reviews")
    public ResponseEntity<List<ClientReview>> getAllReviews() {
        // Return all reviews, newest first
        List<ClientReview> reviews = repository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/reviews")
    public ResponseEntity<Map<String, String>> submitReview(@Valid @RequestBody ClientReview review) {
        ClientReview saved = repository.save(review);
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Review submitted successfully!");
        response.put("id", String.valueOf(saved.getId()));
        
        return ResponseEntity.ok(response);
    }
}
