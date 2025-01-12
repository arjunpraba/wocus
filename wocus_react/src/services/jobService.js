import axios from "axios";

const BASE_URL = "http://localhost:8086/jobs";

const jobService = {
  createJob: (jobData) => {
    return axios.post(BASE_URL, jobData);
  },

  getJobsByEmail: (email) => {
    return axios.get(`${BASE_URL}/email/${email}`);
  },

  getJobsByDomain: (domain) => {
    return axios.get(`${BASE_URL}/domain/${domain}`);
  },

  deleteJob: (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
  },

  updateJob: (id, jobData) => {
    return axios.put(`${BASE_URL}/${id}`, jobData);
  },
};

export default jobService;
