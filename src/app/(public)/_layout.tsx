import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="login/index" options={{ title: 'Вход' }} />
      <Stack.Screen name="register/index" options={{ title: 'Регистрация' }} />
    </Stack>
  );
}
