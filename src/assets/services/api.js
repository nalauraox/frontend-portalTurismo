import axios from "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-3ktq.onrender.com'
})
export default api;