package com.websbond.api.controller;

import com.websbond.api.model.BlogPost;
import com.websbond.api.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SitemapController {

    private final BlogPostRepository blogRepository;

    @Autowired
    public SitemapController(BlogPostRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @GetMapping(value = "/api/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<String> getSitemap() {
        StringBuilder xml = new StringBuilder();
        xml.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
        xml.append("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n");

        // 1. Static Pages
        appendUrl(xml, "https://websbond.com/", "weekly", "1.0", "2024-06-20");
        appendUrl(xml, "https://websbond.com/our-portfolio", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/about-us", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/contact-us", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/blog", "weekly", "0.8", "2024-06-20");

        // Service Pages
        appendUrl(xml, "https://websbond.com/seo-service-in-delhi", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/smo-service-in-delhi", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/smm-service-in-delhi", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/website-design-service-in-delhi", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/content-writing-service-in-delhi", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/google-ads-services", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/gmb-service-in-delhi", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/e-commerce-website-services-in-delhi", "monthly", "0.9", "2024-06-20");

        // Tools, testimonials, payment, case-studies
        appendUrl(xml, "https://websbond.com/seo-analyzer", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/testimonials", "monthly", "0.7", "2024-06-20");
        appendUrl(xml, "https://websbond.com/case-studies", "monthly", "0.7", "2024-06-20");
        appendUrl(xml, "https://websbond.com/payment", "monthly", "0.5", "2024-06-20");
        appendUrl(xml, "https://websbond.com/paypal", "monthly", "0.5", "2024-06-20");

        // 2. Dynamic Blog Pages
        List<BlogPost> blogs = blogRepository.findAll();
        for (BlogPost blog : blogs) {
            String blogUrl = "https://websbond.com/blog/" + escapeXml(blog.getSlug());
            String lastmod = (blog.getDateISO() != null && !blog.getDateISO().isBlank()) ? blog.getDateISO() : "2024-06-20";
            appendUrl(xml, blogUrl, "monthly", "0.8", lastmod);
        }

        xml.append("</urlset>");
        return ResponseEntity.ok(xml.toString());
    }

    private void appendUrl(StringBuilder xml, String loc, String changefreq, String priority, String lastmod) {
        xml.append("  <url>\n");
        xml.append("    <loc>").append(escapeXml(loc)).append("</loc>\n");
        xml.append("    <lastmod>").append(escapeXml(lastmod)).append("</lastmod>\n");
        xml.append("    <changefreq>").append(escapeXml(changefreq)).append("</changefreq>\n");
        xml.append("    <priority>").append(escapeXml(priority)).append("</priority>\n");
        xml.append("  </url>\n");
    }

    private String escapeXml(String input) {
        if (input == null) return "";
        return input
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;")
            .replace("'", "&apos;");
    }
}
