package com.websbond.api.controller;

import com.websbond.api.model.BlogPost;
import com.websbond.api.repository.BlogPostRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BlogPostController {

    private final BlogPostRepository repository;

    @Value("${admin.secret-key:websbond-admin-2024}")
    private String adminSecretKey;

    @Autowired
    public BlogPostController(BlogPostRepository repository) {
        this.repository = repository;
    }

    // Public: Get all blogs
    @GetMapping("/blogs")
    public ResponseEntity<List<BlogPost>> getAllBlogs() {
        List<BlogPost> blogs = repository.findAll();
        // Sort descending by id or custom sorting could be done, let's sort so latest are first
        blogs.sort((a, b) -> b.getId().compareTo(a.getId()));
        return ResponseEntity.ok(blogs);
    }

    // Public: Get blog by slug
    @GetMapping("/blogs/{slug}")
    public ResponseEntity<?> getBlogBySlug(@PathVariable String slug) {
        Optional<BlogPost> blog = repository.findBySlug(slug);
        if (blog.isEmpty()) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Blog post not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
        }
        return ResponseEntity.ok(blog.get());
    }

    // Admin: Create blog post
    @PostMapping("/admin/blogs")
    public ResponseEntity<?> createBlogPost(
            @RequestHeader(value = "X-Admin-Key", required = false) String adminKey,
            @Valid @RequestBody BlogPost blogPost) {
        
        if (adminKey == null || !adminKey.equals(adminSecretKey)) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Unauthorized");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(err);
        }

        if (repository.existsBySlug(blogPost.getSlug())) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Slug already exists. Please choose a unique slug.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
        }

        // Set default dates if empty
        if (blogPost.getDateISO() == null || blogPost.getDateISO().isBlank()) {
            blogPost.setDateISO(LocalDate.now().toString());
        }
        if (blogPost.getDate() == null || blogPost.getDate().isBlank()) {
            blogPost.setDate(LocalDate.now().format(DateTimeFormatter.ofPattern("MMMM dd, yyyy")));
        }
        if (blogPost.getAuthor() == null || blogPost.getAuthor().isBlank()) {
            blogPost.setAuthor("Websbond Team");
        }
        if (blogPost.getAuthorRole() == null || blogPost.getAuthorRole().isBlank()) {
            blogPost.setAuthorRole("Web Development Experts");
        }
        if (blogPost.getReadTime() == null || blogPost.getReadTime().isBlank()) {
            blogPost.setReadTime("5 min read");
        }

        BlogPost saved = repository.save(blogPost);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Admin: Update blog post
    @PutMapping("/admin/blogs/{id}")
    public ResponseEntity<?> updateBlogPost(
            @PathVariable Long id,
            @RequestHeader(value = "X-Admin-Key", required = false) String adminKey,
            @Valid @RequestBody BlogPost blogDetails) {

        if (adminKey == null || !adminKey.equals(adminSecretKey)) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Unauthorized");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(err);
        }

        Optional<BlogPost> optionalBlog = repository.findById(id);
        if (optionalBlog.isEmpty()) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Blog post not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
        }

        BlogPost blog = optionalBlog.get();
        
        // Check if slug is changed and unique
        if (!blog.getSlug().equals(blogDetails.getSlug()) && repository.existsBySlug(blogDetails.getSlug())) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Slug already exists. Please choose a unique slug.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
        }

        blog.setSlug(blogDetails.getSlug());
        blog.setTitle(blogDetails.getTitle());
        blog.setExcerpt(blogDetails.getExcerpt());
        blog.setContent(blogDetails.getContent());
        blog.setCategory(blogDetails.getCategory());
        blog.setCoverImg(blogDetails.getCoverImg());
        blog.setTags(blogDetails.getTags());
        blog.setFeatured(blogDetails.getFeatured());

        if (blogDetails.getDate() != null && !blogDetails.getDate().isBlank()) {
            blog.setDate(blogDetails.getDate());
        }
        if (blogDetails.getDateISO() != null && !blogDetails.getDateISO().isBlank()) {
            blog.setDateISO(blogDetails.getDateISO());
        }
        if (blogDetails.getAuthor() != null && !blogDetails.getAuthor().isBlank()) {
            blog.setAuthor(blogDetails.getAuthor());
        }
        if (blogDetails.getAuthorRole() != null && !blogDetails.getAuthorRole().isBlank()) {
            blog.setAuthorRole(blogDetails.getAuthorRole());
        }
        if (blogDetails.getReadTime() != null && !blogDetails.getReadTime().isBlank()) {
            blog.setReadTime(blogDetails.getReadTime());
        }

        BlogPost updated = repository.save(blog);
        return ResponseEntity.ok(updated);
    }

    // Admin: Delete blog post
    @DeleteMapping("/admin/blogs/{id}")
    public ResponseEntity<?> deleteBlogPost(
            @PathVariable Long id,
            @RequestHeader(value = "X-Admin-Key", required = false) String adminKey) {

        if (adminKey == null || !adminKey.equals(adminSecretKey)) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Unauthorized");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(err);
        }

        Optional<BlogPost> optionalBlog = repository.findById(id);
        if (optionalBlog.isEmpty()) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Blog post not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
        }

        repository.delete(optionalBlog.get());
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Blog post deleted successfully");
        return ResponseEntity.ok(response);
    }
}
