import { Redirect } from 'expo-router';

import api from '@/lib/api/client';

if (__DEV__) {
  api.interceptors.request.use((config) => {
    console.info('Request:', config.url, config.params, config.data);
    return config;
  });

  api.interceptors.response.use((response) => {
    console.info('Response:', response.config.url, response.data);
    return response;
  });
}

export default function Index() {
  return <Redirect href="./main" />;
}
