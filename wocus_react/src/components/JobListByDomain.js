import React, { useEffect, useState } from "react";
import jobService from "../services/jobService";

const JobListByDomain = ({ domain }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobService.getJobsByDomain(domain);
        setJobs(response.data);
      } catch (error) {
        alert("Failed to fetch jobs. Please try again.");
      }
    };

    fetchJobs();
  }, [domain]);

  return (
    <div>
      <h2>Jobs in {domain}</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.jobTitle}</strong> - {job.description} - ₹{job.budget}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available in this domain.</p>
      )}
    </div>
  );
};

export default JobListByDomain;
