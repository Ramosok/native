import { useMutation, UseMutationResult } from '@tanstack/react-query';

import api from '@/lib/api/client';

interface User {
  email: string;
  password1: string;
  password2: string;
}

interface UserReturned {
  createdAt: string;
  deletedAt: string | null;
}

export const createUser = async (user: User): Promise<UserReturned> => {
  const { data } = await api.post<UserReturned>('http://192.168.15.197:3000/auth', user);
  return data;
};

export const useCreateUsersMutation = (): UseMutationResult<UserReturned, Error, User> =>
  useMutation<UserReturned, Error, User>({
    mutationKey: ['createUser'],
    mutationFn: (user: User) => createUser(user),
  });
