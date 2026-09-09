// utils/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/", // or your actual backend URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // get JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // attach token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
