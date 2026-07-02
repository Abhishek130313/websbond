package com.websbond.api.repository;

import com.websbond.api.model.LeadSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeadSubmissionRepository extends JpaRepository<LeadSubmission, Long> {
}
