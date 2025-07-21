import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signUpSchema, SignUpFormData } from '../../model/signUp.schema';

export const useSignUpForm = () => {
  return useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
    //  resolver: zodResolver(signUpSchema),
  });
};
