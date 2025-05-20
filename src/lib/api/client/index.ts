import axios from 'axios';
import { authStore } from '@/lib/stores/auth';

const api = axios.create();

api.interceptors.request.use((config) => {
  const { user } = authStore.getState();
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) authStore.getState().logout();
    throw err;
  }
);
