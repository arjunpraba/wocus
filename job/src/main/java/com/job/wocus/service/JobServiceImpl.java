package com.job.wocus.service;

import com.job.wocus.dto.*;
import com.job.wocus.entity.*;
import com.job.wocus.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO createJob(JobDTO jobDTO) {
        Job job = new Job();
        job.setJobTitle(jobDTO.getJobTitle());
        job.setDomain(jobDTO.getDomain());
        job.setDescription(jobDTO.getDescription());
        job.setBudget(jobDTO.getBudget());
        job.setEmail(jobDTO.getEmail());
        job.setMobileNo(jobDTO.getMobileNo());
        Job savedJob = jobRepository.save(job);
        jobDTO.setEmail(savedJob.getEmail());
        return jobDTO;
    }

    @Override
    public List<JobDTO> getJobsByEmail(String email) {
        return jobRepository.findByEmail(email).stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    @Override
    public List<JobDTO> getJobsByDomain(String domain) {
        return jobRepository.findByDomain(domain).stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    @Override
    public void deleteJob(Long id) {
        if (!jobRepository.existsById(id)) {
            throw new RuntimeException("Job not found with id: " + id);
        }
        jobRepository.deleteById(id);
    }

    @Override
    public JobDTO updateJob(Long id, JobDTO jobDTO) {
        Job job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found with id: " + id));
        job.setJobTitle(jobDTO.getJobTitle());
        job.setDomain(jobDTO.getDomain());
        job.setDescription(jobDTO.getDescription());
        job.setBudget(jobDTO.getBudget());
        job.setEmail(jobDTO.getEmail());
        job.setMobileNo(jobDTO.getMobileNo());
        Job updatedJob = jobRepository.save(job);
        return mapToDTO(updatedJob);
    }

    private JobDTO mapToDTO(Job job) {
        return new JobDTO(
                job.getId(),
                job.getJobTitle(),
                job.getDomain(),
                job.getDescription(),
                job.getBudget(),
                job.getEmail(),
                job.getMobileNo()
        );
    }
}
