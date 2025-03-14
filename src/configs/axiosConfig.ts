import axios from 'axios'
import env from './env'

const axiosInstance = axios.create({
  baseURL: env.VITE_BACKEND_URL,
})

export default axiosInstance
