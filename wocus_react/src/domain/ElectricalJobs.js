import React, { useState, useEffect } from "react";
import jobService from "../services/jobService";

const ElectricalJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobService.getJobsByDomain("Electrical Repair");
        setJobs(response.data);
      } catch (error) {
        setError("Error fetching jobs. Please try again.");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Electrical Repair Jobs</h2>
      {error && <div className="error">{error}</div>}
      <ul>
        {jobs.length === 0 ? (
          <li>No jobs available for Electrical Repair</li>
        ) : (
          jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.jobTitle}</h3>
              <p>{job.description}</p>
              <p>Budget: {job.budget}</p>
              <p>Contact: {job.email}</p>
              <p>Mobile: {job.mobileNumber}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ElectricalJobs;
