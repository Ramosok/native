import * as SecureStore from 'expo-secure-store';

import { TimerState } from '@/shared/components/CountDown/syncExternalStore';

export const loadPersistedState = async (countStorageKey: string): Promise<TimerState | null> => {
  try {
    const jsonValue = await SecureStore.getItemAsync(countStorageKey);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to load timer state', e);
    return null;
  }
};
