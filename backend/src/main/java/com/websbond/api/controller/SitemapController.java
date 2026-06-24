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
        appendUrl(xml, "https://websbond.com/services", "monthly", "0.9", "2024-06-20");
        appendUrl(xml, "https://websbond.com/our-work", "monthly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/about", "monthly", "0.7", "2024-06-20");
        appendUrl(xml, "https://websbond.com/blog", "weekly", "0.8", "2024-06-20");
        appendUrl(xml, "https://websbond.com/contact", "monthly", "0.9", "2024-06-20");

        // 2. Dynamic Blog Pages
        List<BlogPost> blogs = blogRepository.findAll();
        for (BlogPost blog : blogs) {
            String blogUrl = "https://websbond.com/blog/" + blog.getSlug();
            String lastmod = (blog.getDateISO() != null && !blog.getDateISO().isBlank()) ? blog.getDateISO() : "2024-06-20";
            appendUrl(xml, blogUrl, "monthly", "0.8", lastmod);
        }

        xml.append("</urlset>");
        return ResponseEntity.ok(xml.toString());
    }

    private void appendUrl(StringBuilder xml, String loc, String changefreq, String priority, String lastmod) {
        xml.append("  <url>\n");
        xml.append("    <loc>").append(loc).append("</loc>\n");
        xml.append("    <lastmod>").append(lastmod).append("</lastmod>\n");
        xml.append("    <changefreq>").append(changefreq).append("</changefreq>\n");
        xml.append("    <priority>").append(priority).append("</priority>\n");
        xml.append("  </url>\n");
    }
}
