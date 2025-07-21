import { z } from 'zod';

export const recoverPasswordSchema = z.object({
  email: z.string().email('Введите корректный email'),
});

export type RecoverPasswordSchemaSchemaData = z.infer<typeof recoverPasswordSchema>;
