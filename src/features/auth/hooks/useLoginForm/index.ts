import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchemaData } from '@/features/auth/model/login.schema';

export const useLoginForm = () => {
  return useForm<LoginSchemaData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(loginSchema),
  });
};
