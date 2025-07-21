import { useEffect, useCallback, useSyncExternalStore } from 'react';

import { TimerState, timerStore } from '@/shared/components/CountDown/syncExternalStore';
import { getTimerKey } from '@/shared/components/CountDown/utils/getTimerKey';
import { loadPersistedState } from '@/shared/components/CountDown/utils/loadPersistedState';
import { persistState } from '@/shared/components/CountDown/utils/persistState';
import { ONE_MINUTE, ONE_SECOND } from '@/shared/constants/time';

interface useTimerOutput {
  resetTimer: () => void;
  secondsLeft: number;
  initTimer: () => Promise<void>;
}

export const useTimer = (countStorageKey: string): useTimerOutput => {
  const { isRunning, secondsLeft, lastUpdated } = useSyncExternalStore(
    timerStore.subscribe,
    timerStore.getSnapshot,
    timerStore.getSnapshot,
  );

  const key = getTimerKey(countStorageKey);

  const initTimer = async (): Promise<void> => {
    const savedState = await loadPersistedState(key);
    if (savedState) {
      const elapsed = Math.floor((Date.now() - savedState.lastUpdated) / ONE_SECOND);
      const updatedSeconds = Math.max(0, savedState.secondsLeft - elapsed);

      timerStore.updateState({
        secondsLeft: updatedSeconds,
        lastUpdated: Date.now(),
        isRunning: updatedSeconds > 0 && savedState.isRunning,
      });
    } else {
      timerStore.updateState({
        secondsLeft: ONE_MINUTE,
        lastUpdated: Date.now(),
        isRunning: true,
      });
    }
  };

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - lastUpdated) / ONE_SECOND);

      if (elapsed >= 1) {
        const newSeconds = Math.max(0, secondsLeft - elapsed);

        const newState: TimerState = {
          secondsLeft: newSeconds,
          lastUpdated: now,
          isRunning: newSeconds > 0,
        };

        timerStore.updateState(newState);
        persistState(key, newState);
      }
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, lastUpdated]);

  const resetTimer = useCallback(() => {
    const newState = {
      secondsLeft: ONE_MINUTE,
      lastUpdated: Date.now(),
      isRunning: true,
    };
    timerStore.updateState(newState);
    persistState(key, newState);
  }, []);

  return { resetTimer, secondsLeft, initTimer };
};
