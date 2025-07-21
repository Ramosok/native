import { z } from 'zod';

const minPasswordLength = 6;

export const loginSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(minPasswordLength, 'Введите пароль'),
});

export type LoginSchemaData = z.infer<typeof loginSchema>;
