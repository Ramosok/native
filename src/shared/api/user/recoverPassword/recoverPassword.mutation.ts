import { useMutation, UseMutationResult } from '@tanstack/react-query';

import api from '@/lib/api/client';

export interface Email {
  email: string;
}

const recoverPassword = async (email: Email): Promise<void> => {
  const { data } = await api.post<void>('https://jsonplaceholder.typicode.com/users', email);

  return data;
};

export const useRecoverPasswordMutation = (): UseMutationResult<void, Error, Email> =>
  useMutation<void, Error, Email>({
    mutationKey: ['recoverPassword'],
    mutationFn: (email: Email) => recoverPassword(email),
  });
