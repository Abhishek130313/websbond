package com.websbond.api.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Component
public class AdminKeyAuthFilter extends OncePerRequestFilter {

    private final String adminSecretKey;

    public AdminKeyAuthFilter(@Value("${admin.secret-key}") String adminSecretKey) {
        if (adminSecretKey == null || adminSecretKey.isBlank()) {
            throw new IllegalStateException("ADMIN_SECRET_KEY environment variable must be set");
        }
        this.adminSecretKey = adminSecretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain chain) throws ServletException, IOException {
        String path = request.getRequestURI();

        if (!path.startsWith("/api/admin/")) {
            chain.doFilter(request, response);
            return;
        }

        String providedKey = request.getHeader("X-Admin-Key");
        if (providedKey == null || providedKey.isBlank()) {
            writeUnauthorized(response, "Missing admin key");
            return;
        }

        if (!constantTimeEquals(providedKey, adminSecretKey)) {
            writeUnauthorized(response, "Invalid admin key");
            return;
        }

        chain.doFilter(request, response);
    }

    private boolean constantTimeEquals(String a, String b) {
        byte[] aBytes = a.getBytes(StandardCharsets.UTF_8);
        byte[] bBytes = b.getBytes(StandardCharsets.UTF_8);
        return MessageDigest.isEqual(aBytes, bBytes);
    }

    private void writeUnauthorized(HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.getWriter().write("{\"error\":\"" + message + "\"}");
    }
}
