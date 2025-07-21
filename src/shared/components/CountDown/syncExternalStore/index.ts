import { ONE_MINUTE } from '@/shared/constants/time';

export type TimerState = {
  secondsLeft: number;
  lastUpdated: number;
  isRunning: boolean;
};

let timerState: TimerState = {
  secondsLeft: ONE_MINUTE,
  lastUpdated: Date.now(),
  isRunning: false,
};

let listeners: (() => void)[] = [];

export const timerStore = {
  subscribe: (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: () => timerState,
  updateState: (newState: Partial<TimerState>) => {
    timerState = { ...timerState, ...newState };
    listeners.forEach((l) => l());
  },
};
