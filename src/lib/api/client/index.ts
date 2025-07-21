import axios from 'axios';

import { ResponseErrorCode } from '@/lib/api/api.types';
import { authStore } from '@/lib/stores/auth';

import { BASE_URL } from '../config/env';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const { user } = authStore.getState();
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
    if (response?.status === ResponseErrorCode.Unauthorized) {
      authStore.getState().logout();
    }

    return Promise.reject(error);
  },
);

export default api;
