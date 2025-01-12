import React, { useState } from "react";
import jobService from "../services/jobService";
import './JobListByEmail.css';

const JobListByEmail = () => {
  const [email, setEmail] = useState("");
  const [jobs, setJobs] = useState([]);
  const [editedJob, setEditedJob] = useState(null); // State for holding the job to be edited

  const handleSearch = async () => {
    try {
      const response = await jobService.getJobsByEmail(email);
      setJobs(response.data);
    } catch (error) {
      alert("Failed to fetch jobs. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await jobService.deleteJob(id);
      setJobs(jobs.filter(job => job.id !== id)); // Remove the deleted job from state
      alert("Job deleted successfully!");
    } catch (error) {
      alert("Failed to delete the job. Please try again.");
    }
  };

  const handleEdit = (job) => {
    console.log('Job to be edited:', job); // Log the job to check its id
    setEditedJob({ ...job }); // Set the job to be edited
  };

  const handleSaveEdit = async () => {
    if (!editedJob || !editedJob.id) {
      alert("Job ID is missing, cannot update the job.");
      return;
    }

    try {
      const response = await jobService.updateJob(editedJob.id, editedJob);
      console.log("Response after update:", response); // Log the response
      setJobs(jobs.map(job => (job.id === editedJob.id ? editedJob : job))); // Update the job in the state
      setEditedJob(null); // Reset the edited job state
      alert("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error); // Log the error
      alert("Failed to update the job. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob({ ...editedJob, [name]: value });
  };

  return (
    <div>
      <h2>Search Jobs by Email</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              {editedJob && editedJob.id === job.id ? (
                <div>
                  <input
                    type="text"
                    name="jobTitle"
                    value={editedJob.jobTitle}
                    onChange={handleChange}
                  />
                  <textarea
                    name="description"
                    value={editedJob.description}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="budget"
                    value={editedJob.budget}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="mobileNo"
                    value={editedJob.mobileNo}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={editedJob.email}
                    onChange={handleChange}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </div>
              ) : (
                <div>
                  <strong>Title : {job.jobTitle}</strong> |||||||||||||     
                  Description : {job.description}  |||||||||||             
                  Budget : ₹{job.budget}  ||||||||||            
                  MobileNo : {job.mobileNo}       ||||||||||      Email : {job.email}

                  <button onClick={() => handleEdit(job)}>Edit</button>
                  <button onClick={() => handleDelete(job.id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found for this email.</p>
      )}
    </div>
  );
};

export default JobListByEmail;
