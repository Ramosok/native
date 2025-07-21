import { z } from 'zod';

const minPasswordLength = 6;

export const signUpSchema = z
  .object({
    email: z.string().email('Введите корректный email'),
    password: z
      .string()
      .min(minPasswordLength, `Минимум ${minPasswordLength} символов`)
      .refine((val) => /[a-zA-Z]/.test(val), {
        message: 'Пароль должен содержать хотя бы одну букву',
      })
      .refine((val) => /\d/.test(val), { message: 'Пароль должен содержать хотя бы одну цифру' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
