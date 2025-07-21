import { useMutation, UseMutationResult } from '@tanstack/react-query';

import api from '@/lib/api/client';

export interface User {
  email: string;
  password: string;
}

interface loginUserReturn {
  token: string;
}

const loginUser = async (user: User): Promise<loginUserReturn> => {
  const { data } = await api.post<loginUserReturn>(
    'https://jsonplaceholder.typicode.com/users',
    user,
  );

  return data;
};

export const useLoginUserMutation = (): UseMutationResult<loginUserReturn, Error, User> =>
  useMutation<loginUserReturn, Error, User>({
    mutationKey: ['loginUser'],
    mutationFn: (user: User) => loginUser(user),
  });
