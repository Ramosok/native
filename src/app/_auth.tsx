import { Redirect } from 'expo-router';

import { FC, PropsWithChildren, useSyncExternalStore } from 'react';

import { getAuthSnapshot, subscribeAuth } from '@/lib/stores/auth';

const AuthSync: FC<PropsWithChildren> = ({ children }) => {
  const user = useSyncExternalStore(subscribeAuth, getAuthSnapshot);

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <>{children}</>;
};

export default AuthSync;
