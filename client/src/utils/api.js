import axios from 'axios';

const API = axios.create({
  baseURL: "https://kamla-portfolio26.onrender.com/api",
});


API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers['x-auth-token'] = localStorage.getItem('token');
  }
  return req;
});

export default API;