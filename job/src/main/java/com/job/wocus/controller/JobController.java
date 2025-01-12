package com.job.wocus.controller;

import com.job.wocus.dto.JobDTO;
import com.job.wocus.service.JobService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:3000")  // Allow CORS from localhost:3000
public class JobController {

    private static final Logger logger = LoggerFactory.getLogger(JobController.class);

    @Autowired
    private JobService jobService;

    @PostMapping
    public ResponseEntity<JobDTO> createJob(@RequestBody JobDTO jobDTO) {
        logger.info("Received request to create job: {}", jobDTO);
        
        try {
            JobDTO createdJob = jobService.createJob(jobDTO);
            logger.info("Job created successfully: {}", createdJob);
            return ResponseEntity.ok(createdJob);
        } catch (Exception e) {
            logger.error("Error creating job: ", e);
            return ResponseEntity.status(500).body(null);  // Returning HTTP 500 for server errors
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<JobDTO>> getJobsByEmail(@PathVariable String email) {
        logger.info("Received request to get jobs by email: {}", email);

        try {
            List<JobDTO> jobs = jobService.getJobsByEmail(email);
            logger.info("Found {} jobs for email: {}", jobs.size(), email);
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            logger.error("Error fetching jobs by email: ", e);
            return ResponseEntity.status(500).body(null);  // Handle errors appropriately
        }
    }

    @GetMapping("/domain/{domain}")
    public ResponseEntity<List<JobDTO>> getJobsByDomain(@PathVariable String domain) {
        logger.info("Received request to get jobs by domain: {}", domain);

        try {
            List<JobDTO> jobs = jobService.getJobsByDomain(domain);
            logger.info("Found {} jobs for domain: {}", jobs.size(), domain);
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            logger.error("Error fetching jobs by domain: ", e);
            return ResponseEntity.status(500).body(null);  // Handle errors appropriately
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable Long id) {
        logger.info("Received request to delete job with ID: {}", id);

        try {
            jobService.deleteJob(id);
            logger.info("Job with ID: {} has been deleted successfully", id);
            return ResponseEntity.ok("Job with ID " + id + " has been deleted successfully.");
        } catch (Exception e) {
            logger.error("Error deleting job with ID: {}", id, e);
            return ResponseEntity.status(500).body("Failed to delete job with ID " + id);  // Handle errors appropriately
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobDTO> updateJob(@PathVariable Long id, @RequestBody JobDTO jobDTO) {
        logger.info("Received request to update job with ID: {}. New data: {}", id, jobDTO);

        try {
            JobDTO updatedJob = jobService.updateJob(id, jobDTO);
            logger.info("Job with ID: {} updated successfully: {}", id, updatedJob);
            return ResponseEntity.ok(updatedJob);
        } catch (Exception e) {
            logger.error("Error updating job with ID: {}", id, e);
            return ResponseEntity.status(500).body(null);  // Handle errors appropriately
        }
    }
}
