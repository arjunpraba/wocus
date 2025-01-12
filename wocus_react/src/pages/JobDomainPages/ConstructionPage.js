import React, { useEffect, useState } from "react";
import jobService from "../services/jobService";

const ConstructionPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobService.getJobsByDomain("Construction").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Construction Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs available in this domain.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.jobTitle}</h3>
              <p>{job.description}</p>
              <p>Budget: {job.budget}</p>
              <p>Contact: {job.email} | {job.mobileNo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConstructionPage;
