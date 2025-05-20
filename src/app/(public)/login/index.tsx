import { FC } from 'react';

import { router } from 'expo-router';
import { Button } from 'react-native';

import { authStore } from '@/lib/stores/auth';

const Login: FC = () => {
  const handleLogin = () => {
    authStore.getState().login({ id: '1', token: 'test' });
    router.navigate('/');
  };

  return <Button onPress={handleLogin} title="Войти" />;
};

export default Login;
