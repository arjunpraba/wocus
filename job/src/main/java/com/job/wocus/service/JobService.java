package com.job.wocus.service;

import com.job.wocus.dto.*;

import java.util.List;

public interface JobService {
    JobDTO createJob(JobDTO jobDTO);

    List<JobDTO> getJobsByEmail(String email);

    List<JobDTO> getJobsByDomain(String domain);

    void deleteJob(Long id);

    JobDTO updateJob(Long id, JobDTO jobDTO);
}
