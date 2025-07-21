import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  recoverPasswordSchema,
  RecoverPasswordSchemaSchemaData,
} from '@/features/auth/model/recoverPassword.schema';

export const useRecoverPassword = () => {
  return useForm<RecoverPasswordSchemaSchemaData>({
    values: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(recoverPasswordSchema),
  });
};
