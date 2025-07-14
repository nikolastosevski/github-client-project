import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

// Globalni error handling (opciono)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error?.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;