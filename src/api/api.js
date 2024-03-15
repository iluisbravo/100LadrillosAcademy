/* eslint-disable no-useless-catch */
// api.js

import axios from 'axios';

const BASE_URL = 'https://9cc8-2806-2f0-5021-f6ec-6cd1-480f-aa90-9aa6.ngrok-free.app/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

const login = async (email, password) => {
  try {
    const response = await api.post('/users/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    // Manejar errores de solicitud
    throw error;
  }
};

const register = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    // Manejar errores de solicitud
    throw error;
  }
};

export { login, register };
