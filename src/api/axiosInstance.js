import axios from 'axios';

// Kreiranje instance Axios-a za pozivanje API metoda.
const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

// Globalni error handling
axiosInstance.interceptors.response.use(
  response => response,       // Rezultat se vraća takav kakav jeste.
  error => {                  // Error se vidi u konzoli.
    console.error('API error:', error?.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;