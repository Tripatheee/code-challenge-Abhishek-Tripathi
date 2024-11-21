import axios, { AxiosError } from "axios";

// Axios Instance
const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request configuration (Interceptor)
axiosClient.interceptors.request.use((config) => {

  // Code to intercept http request

  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError) => {
    const status = err.response?.status;

    // code for handling response if needed
    if (status === 401) {
      // additional code for handling 401
      return Promise.reject(err);
    }
    return Promise.reject(err?.response?.data);

  }
);

export default axiosClient;