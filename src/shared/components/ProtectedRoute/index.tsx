import AuthSync from '@/app/_auth';
import { FC, PropsWithChildren } from 'react';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  return <AuthSync>{children}</AuthSync>;
};
