package com.job.wocus.repository;

import com.job.wocus.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByEmail(String email);

    List<Job> findByDomain(String domain);
}

