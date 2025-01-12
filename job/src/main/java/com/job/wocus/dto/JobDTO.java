package com.job.wocus.dto;

public class JobDTO {
    private Long id;
    private String jobTitle;
    private String domain;
    private String description;
    private Double budget;
    private String email;
    private String mobileNo;

    // Default constructor
    public JobDTO() {
    }

    // Parameterized constructor
    public JobDTO(Long id, String jobTitle, String domain, String description, Double budget, String email, String mobileNo) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.domain = domain;
        this.description = description;
        this.budget = budget;
        this.email = email;
        this.mobileNo = mobileNo;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getBudget() {
        return budget;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    @Override
    public String toString() {
        return "JobDTO{" +
                "id=" + id +
                ", jobTitle='" + jobTitle + '\'' +
                ", domain='" + domain + '\'' +
                ", description='" + description + '\'' +
                ", budget=" + budget +
                ", email='" + email + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                '}';
    }
}
