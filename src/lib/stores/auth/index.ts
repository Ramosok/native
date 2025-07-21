import { create } from 'zustand';

type User = { id: string; token: string } | null;
type AuthState = {
  user: User;
  login: (user: NonNullable<User>) => void;
  logout: () => void;
};

export const authStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export const subscribeAuth = (callback: () => void) => {
  return authStore.subscribe((state, prevState) => {
    if (state.user !== prevState.user) callback();
  });
};

export const getAuthSnapshot = () => authStore.getState().user;
