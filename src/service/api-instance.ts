import axios from "axios";
import { getSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const apiInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.token) {
      config.headers.Authorization = `Bearer ${session.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
