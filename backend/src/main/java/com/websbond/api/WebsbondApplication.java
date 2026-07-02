package com.websbond.api;

import com.websbond.api.model.ClientReview;
import com.websbond.api.repository.ClientReviewRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class WebsbondApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebsbondApplication.class, args);
    }

    @Bean
    @Profile("dev")
    public CommandLineRunner demo(ClientReviewRepository repository) {
        return (args) -> {
            if (repository.count() == 0) {
                // Rohit
                repository.save(new ClientReview(
                    "Rohit Verma",
                    "Hotel Owner, Kanpur",
                    "Hospitality",
                    5,
                    "Websbond completely transformed our hotel's online presence. Direct website bookings increased threefold, and our customer reviews have improved significantly!",
                    0
                ));
                // Neha
                repository.save(new ClientReview(
                    "Neha Sharma",
                    "Salon Owner, Lucknow",
                    "Wellness",
                    5,
                    "The team is extremely professional. Their 24/7 support is what sets them apart. Whenever I need updates or changes, they handle it within minutes.",
                    1
                ));
                // Amit
                repository.save(new ClientReview(
                    "Amit Patel",
                    "Kirana Store, Indore",
                    "Retail",
                    5,
                    "They built a digital ordering website that is so clean and easy to use that customers now place orders themselves via WhatsApp. Excellent craftsmanship.",
                    2
                ));
                // Vikram
                repository.save(new ClientReview(
                    "Vikram Singh",
                    "Gym Owner, Jaipur",
                    "Fitness",
                    5,
                    "Their Google and Facebook Ads setup generated 45 new memberships in the very first month. Absolute value for money.",
                    3
                ));
            }
        };
    }
}
