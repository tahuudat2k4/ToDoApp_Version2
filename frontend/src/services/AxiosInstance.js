import axios from "axios"

const API_URL = "http://localhost:3000/api"

const STORAGE_KEY = "todoapp"

const instance = axios.create({
  baseURL: API_URL,
})
// Add a request interceptor
instance.interceptors.request.use((config) => {
  try {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
  } catch {}
  return config;
})
// Add a response interceptor
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEY)
      window.location.href = "/signin"
    }
    return Promise.reject(err)
  }
)

export default instance;
