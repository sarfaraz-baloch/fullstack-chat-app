import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === 'development' 
        ? 'http://localhost:5001/api' 
        : 'https://chtapp-backend-production.up.railway.app/api',
    withCredentials: true,
});
