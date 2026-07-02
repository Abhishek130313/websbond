package com.websbond.api.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;

@Component
public class RateLimitingFilter extends OncePerRequestFilter {

    private final Map<String, Deque<Long>> requestLog = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain chain) throws ServletException, IOException {
        String method = request.getMethod();

        if ("GET".equalsIgnoreCase(method) || "OPTIONS".equalsIgnoreCase(method)) {
            chain.doFilter(request, response);
            return;
        }

        String clientIp = resolveClientIp(request);
        String path = request.getRequestURI();
        String key = clientIp + ":" + path;

        int maxRequests = getRateLimit(path);
        long windowMs = 60_000L;

        long now = System.currentTimeMillis();
        Deque<Long> timestamps = requestLog.computeIfAbsent(key, k -> new ConcurrentLinkedDeque<>());

        synchronized (timestamps) {
            while (!timestamps.isEmpty() && timestamps.peekFirst() < now - windowMs) {
                timestamps.pollFirst();
            }

            if (timestamps.size() >= maxRequests) {
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.setContentType("application/json");
                response.getWriter().write("{\"error\":\"Too many requests. Please try again later.\"}");
                return;
            }

            timestamps.addLast(now);
        }

        chain.doFilter(request, response);
    }

    private String resolveClientIp(HttpServletRequest request) {
        String xff = request.getHeader("X-Forwarded-For");
        if (xff != null && !xff.isBlank()) {
            return xff.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private int getRateLimit(String path) {
        if (path.startsWith("/api/admin/")) return 60;
        if (path.equals("/api/contact") || path.equals("/api/reviews") || path.equals("/api/newsletter")) return 5;
        return 20;
    }
}
