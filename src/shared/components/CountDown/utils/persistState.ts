import * as SecureStore from 'expo-secure-store';

import { TimerState } from '@/shared/components/CountDown/syncExternalStore';

export const persistState = async (countStorageKey: string, state: TimerState) => {
  try {
    await SecureStore.setItemAsync(countStorageKey, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to persist timer state', e);
  }
};
