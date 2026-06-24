package com.websbond.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

@Service
public class NotificationService {

    private static final Logger log = LoggerFactory.getLogger(NotificationService.class);
    private final HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(8)).build();

    @Value("${notification.telegram.bot-token:}")
    private String telegramBotToken;

    @Value("${notification.telegram.chat-id:}")
    private String telegramChatId;

    @Value("${notification.callmebot.phone:}")
    private String callmebotPhone;

    @Value("${notification.callmebot.apikey:}")
    private String callmebotApiKey;

    /**
     * Send notification to all configured channels.
     */
    public void notifyNewContact(String name, String email, String phone, String subject, String message) {
        String text = buildMessage(name, email, phone, subject, message);

        if (!telegramBotToken.isBlank() && !telegramChatId.isBlank()) {
            sendTelegram(text);
        }

        if (!callmebotPhone.isBlank() && !callmebotApiKey.isBlank()) {
            sendWhatsApp(text);
        }
    }

    /* ── Telegram ── */
    private void sendTelegram(String text) {
        try {
            String url = String.format(
                "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s&parse_mode=HTML",
                telegramBotToken,
                telegramChatId,
                URLEncoder.encode(text, StandardCharsets.UTF_8)
            );
            HttpRequest req = HttpRequest.newBuilder(URI.create(url))
                .GET().timeout(Duration.ofSeconds(8)).build();
            HttpResponse<String> res = http.send(req, HttpResponse.BodyHandlers.ofString());
            if (res.statusCode() == 200) {
                log.info("Telegram notification sent successfully");
            } else {
                log.warn("Telegram notification failed: HTTP {} — {}", res.statusCode(), res.body());
            }
        } catch (IOException | InterruptedException e) {
            log.error("Telegram notification error: {}", e.getMessage());
        }
    }

    /* ── WhatsApp via CallMeBot ── */
    private void sendWhatsApp(String plain) {
        try {
            // CallMeBot doesn't support HTML, use plain text
            String plainText = plain
                .replaceAll("<[^>]+>", "")
                .replaceAll("&#10;", "\n");
            String url = String.format(
                "https://api.callmebot.com/whatsapp.php?phone=%s&text=%s&apikey=%s",
                URLEncoder.encode(callmebotPhone, StandardCharsets.UTF_8),
                URLEncoder.encode(plainText, StandardCharsets.UTF_8),
                callmebotApiKey
            );
            HttpRequest req = HttpRequest.newBuilder(URI.create(url))
                .GET().timeout(Duration.ofSeconds(10)).build();
            HttpResponse<String> res = http.send(req, HttpResponse.BodyHandlers.ofString());
            if (res.statusCode() == 200) {
                log.info("WhatsApp notification sent successfully");
            } else {
                log.warn("WhatsApp notification failed: HTTP {} — {}", res.statusCode(), res.body());
            }
        } catch (IOException | InterruptedException e) {
            log.error("WhatsApp notification error: {}", e.getMessage());
        }
    }

    /* ── Message Template ── */
    private String buildMessage(String name, String email, String phone, String subject, String message) {
        return String.format(
            "🔔 <b>New Contact Brief – Websbond</b>&#10;&#10;" +
            "👤 <b>Name:</b> %s&#10;" +
            "📧 <b>Email:</b> %s&#10;" +
            "📞 <b>Phone:</b> %s&#10;" +
            "🎯 <b>Subject:</b> %s&#10;" +
            "💬 <b>Message:</b> %s&#10;&#10;" +
            "🔗 <a href=\"https://websbond.com/admin\">Open Admin Panel</a>",
            safe(name), safe(email), safe(phone), safe(subject), safe(message)
        );
    }

    private String safe(String s) {
        return s == null || s.isBlank() ? "—" : s;
    }
}
