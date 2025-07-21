import { useMutation, UseMutationResult } from '@tanstack/react-query';

import api from '@/lib/api/client';

export const signInWithGoogle = async (): Promise<void> => {
  const { data } = await api.get<void>(
    'https://accounts.google.com/o/oauth2/v2/auth?client_id=63731462003-lb6t5beqa32na799hmqdaqo980a34jsd.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fvandrounik.com2Faccounts2Fgoogle2Flogin2Fcallback2F&scope=email+profile&response_type=code&state=Eoph11avyipUJF6d&access_type=online',
  );
  return data;
};

export const useSignInWithGoogle = (): UseMutationResult<void, Error, void> =>
  useMutation<void, Error, void>({
    mutationKey: ['signInWithGoogle'],
    mutationFn: () => signInWithGoogle(),
  });
