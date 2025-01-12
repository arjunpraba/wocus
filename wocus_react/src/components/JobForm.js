import React, { useState } from "react";
import jobService from "../services/jobService";
import './JobForm.css';

const JobForm = () => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    domain: "Plumbing",
    description: "",
    budget: "",
    email: "",
    mobileNo: "",
  });

  const [error, setError] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator

  const domains = [
    "Plumbing",
    "Electrical Repair",
    "AC Repair",
    "Electronics Repair",
    "Artwork",
    "Construction",
    "Mechanic",
    "Software Work",
    "Carpentry Work",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator

    try {
      await jobService.createJob(jobData);
      alert("Job created successfully!");
      setJobData({
        jobTitle: "",
        domain: "Plumbing",
        description: "",
        budget: "",
        email: "",
        mobileNo: "",
      });
      setError(null); // Reset error if the job is successfully created
    } catch (error) {
      console.error("Error creating job:", error);

      // Get detailed error message from backend (if provided)
      const errorMessage = error.response?.data?.message || "Oops! Something went wrong. Please check your input and try again.";
      setError(errorMessage); // Set error message in state
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Job</h2>

      {loading && <div className="loading-spinner">Loading...</div>} {/* Show loading spinner */}

      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      <div>
        <label>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Domain:</label>
        <select
          name="domain"
          value={jobData.domain}
          onChange={handleChange}
        >
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={jobData.budget}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={jobData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile No:</label>
        <input
          type="text"
          name="mobileNo"
          value={jobData.mobileNo}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>Create Job</button>
    </form>
  );
};

export default JobForm;
