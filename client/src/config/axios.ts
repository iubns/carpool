import axios from "axios"
import { API_URL } from "../constants"

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // For example, you can add an authorization token here
    const token = localStorage.getItem("token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default instance
