package com.websbond.api.controller;

import com.websbond.api.model.NewsletterSubscription;
import com.websbond.api.repository.NewsletterSubscriptionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class NewsletterController {

    private final NewsletterSubscriptionRepository repository;

    @Autowired
    public NewsletterController(NewsletterSubscriptionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/newsletter")
    public ResponseEntity<Map<String, String>> subscribeToNewsletter(@Valid @RequestBody NewsletterSubscription subscription) {
        // Normalise email format
        String email = subscription.getEmail().trim().toLowerCase();
        
        Optional<NewsletterSubscription> existing = repository.findByEmail(email);
        Map<String, String> response = new HashMap<>();
        
        if (existing.isPresent()) {
            response.put("status", "success");
            response.put("message", "You are already subscribed!");
            return ResponseEntity.ok(response);
        }
        
        subscription.setEmail(email);
        repository.save(subscription);
        
        response.put("status", "success");
        response.put("message", "Subscribed successfully!");
        return ResponseEntity.ok(response);
    }
}
