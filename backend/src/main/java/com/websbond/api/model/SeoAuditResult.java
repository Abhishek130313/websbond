package com.websbond.api.model;

import java.util.ArrayList;
import java.util.List;

public class SeoAuditResult {
    private int score;
    private List<AuditItem> passed;
    private List<AuditItem> warnings;
    private boolean isEstimated;

    public SeoAuditResult() {
        this.passed = new ArrayList<>();
        this.warnings = new ArrayList<>();
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public List<AuditItem> getPassed() {
        return passed;
    }

    public void setPassed(List<AuditItem> passed) {
        this.passed = passed;
    }

    public List<AuditItem> getWarnings() {
        return warnings;
    }

    public void setWarnings(List<AuditItem> warnings) {
        this.warnings = warnings;
    }

    public boolean isEstimated() {
        return isEstimated;
    }

    public void setEstimated(boolean estimated) {
        isEstimated = estimated;
    }
}
