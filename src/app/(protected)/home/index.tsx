import { Button, Text, View } from 'react-native';
import { authStore } from '@/lib/stores/auth';
import { FC } from 'react';

const Home: FC = () => {
  const handleLogOut = () => {
    authStore.getState().logout();
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogOut} title="Выйти" />
    </View>
  );
};

export default Home;
