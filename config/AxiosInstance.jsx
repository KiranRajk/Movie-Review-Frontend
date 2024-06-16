import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BE_URL
})

axiosInstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        console.log('Authorization header set:', config.headers['Authorization']); // Debug log
      } else {
        console.warn('No token found'); // Debug log
      }
    return config;
})

export default axiosInstance