// src/api/axiosInstance.js
import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 600000,  // You can set a timeout of 10 seconds, for example
});

// Request Interceptor
axiosInstance.interceptors.request.use(config => {
    // Assuming you store your token in localStorage or context
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // You can add more configurations here
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

// Response Interceptor
axiosInstance.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
        // Handle 401 errors, possibly refresh token or redirect to login
    }
    return Promise.reject(error);
});

export default axiosInstance;
