import { Stack } from 'expo-router';

import { ProtectedRoute } from '@/shared/components/ProtectedRoute';

export default function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen name="home/index" options={{ title: 'Главная' }} />
        <Stack.Screen name="profile/index" options={{ title: 'Профиль' }} />
      </Stack>
    </ProtectedRoute>
  );
}
