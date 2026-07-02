package com.websbond.api.controller;

import com.websbond.api.model.SeoAuditResult;
import com.websbond.api.service.SeoAuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/seo")
public class SeoAuditController {

    private final SeoAuditService seoAuditService;

    @Autowired
    public SeoAuditController(SeoAuditService seoAuditService) {
        this.seoAuditService = seoAuditService;
    }

    @GetMapping("/audit")
    public ResponseEntity<SeoAuditResult> auditUrl(@RequestParam("url") String url) {
        SeoAuditResult result = seoAuditService.performAudit(url);
        return ResponseEntity.ok(result);
    }
}
