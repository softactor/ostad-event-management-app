import axios from "axios";

const apiUrl = "http://localhost:8095/api/"


// Create an Axios instance with the base URL from .env
const api = axios.create({
  baseURL: "http://localhost:8095/api/",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (for authentication token if needed)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor (for handling errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
