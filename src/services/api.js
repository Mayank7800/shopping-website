import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  register: (userData) => API.post('/register', userData),
  login: (credentials) => API.post('/login', credentials),
};

export default API;