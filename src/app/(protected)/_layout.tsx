import { useSyncExternalStore } from 'react';

import { Redirect, Stack } from 'expo-router';

import { getAuthSnapshot, subscribeAuth } from '@/lib/stores/auth';

export default function ProtectedLayout() {
  const user = useSyncExternalStore(subscribeAuth, getAuthSnapshot);

  if (!user) {
    return <Redirect href="../main" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={Boolean(user)}>
        <Stack.Screen name="/" options={{ title: 'Главная' }} />
        <Stack.Screen name="profile" options={{ title: 'Профиль' }} />
      </Stack.Protected>
    </Stack>
  );
}
