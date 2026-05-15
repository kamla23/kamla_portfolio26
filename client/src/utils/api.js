import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Aapka backend URL
});

// Ye middleware har request ke sath token automatic bhej dega agar localstorage mein hai toh
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers['x-auth-token'] = localStorage.getItem('token');
  }
  return req;
});

export default API;