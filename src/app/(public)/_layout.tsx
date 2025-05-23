import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="main/index" options={{ headerShown: false }} />
    </Stack>
  );
}
