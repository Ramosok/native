import { FC, PropsWithChildren, useSyncExternalStore } from 'react';

import { Redirect } from 'expo-router';

import { getAuthSnapshot, subscribeAuth } from '@/lib/stores/auth';

const AuthSync: FC<PropsWithChildren> = ({ children }) => {
  const user = useSyncExternalStore(subscribeAuth, getAuthSnapshot);

  if (!user) {
    return <Redirect href="./main" />;
  }

  return <>{children}</>;
};

export default AuthSync;
