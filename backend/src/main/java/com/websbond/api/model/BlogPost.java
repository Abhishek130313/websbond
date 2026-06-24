package com.websbond.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "blog_posts", indexes = {
    @Index(name = "idx_blog_post_slug", columnList = "slug", unique = true)
})
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Slug is required")
    @Column(nullable = false, unique = true)
    private String slug;

    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String excerpt;

    @Column(columnDefinition = "TEXT")
    private String content; // Will contain HTML content

    private String category;

    private String date; // Formatted date string (e.g. "June 20, 2024")

    private String dateISO; // ISO date string (e.g. "2024-06-20")

    private String author;

    private String authorRole;

    private String readTime;

    @Column(length = 1000)
    private String coverImg;

    @Column(length = 1000)
    private String tags; // Comma-separated list of tags

    private Boolean featured = false;

    private LocalDateTime createdAt;

    public BlogPost() {
    }

    public BlogPost(String slug, String title, String excerpt, String content, String category, String date, String dateISO, String author, String authorRole, String readTime, String coverImg, String tags, Boolean featured) {
        this.slug = slug;
        this.title = title;
        this.excerpt = excerpt;
        this.content = content;
        this.category = category;
        this.date = date;
        this.dateISO = dateISO;
        this.author = author;
        this.authorRole = authorRole;
        this.readTime = readTime;
        this.coverImg = coverImg;
        this.tags = tags;
        this.featured = featured;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.featured == null) {
            this.featured = false;
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDateISO() {
        return dateISO;
    }

    public void setDateISO(String dateISO) {
        this.dateISO = dateISO;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthorRole() {
        return authorRole;
    }

    public void setAuthorRole(String authorRole) {
        this.authorRole = authorRole;
    }

    public String getReadTime() {
        return readTime;
    }

    public void setReadTime(String readTime) {
        this.readTime = readTime;
    }

    public String getCoverImg() {
        return coverImg;
    }

    public void setCoverImg(String coverImg) {
        this.coverImg = coverImg;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
