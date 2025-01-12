// src/axiosConfig.js
import axios from 'axios';

// Set the default base URL for all Axios requests
axios.defaults.baseURL = 'http://localhost:8080/api';  // Replace with your backend URL

// Add a request interceptor to include the token in headers for all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
