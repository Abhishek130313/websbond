package com.websbond.api.repository;

import com.websbond.api.model.ClientReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientReviewRepository extends JpaRepository<ClientReview, Long> {
}
