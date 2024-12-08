import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email({ message: 'Email inválido' }).trim().optional(),
	userName: z
		.string()
		.min(4, { message: 'O usuário deve conter, pelo menos, 4 dígitos' })
		.trim(),
	password: z
		.string()
		.min(8, { message: 'A senha deve conter, pelo menos, 8 dígitos' })
		.regex(/[a-zA-Z]/, { message: 'Deve conter, pelo menos, uma letra' })
		.regex(/[0-9]/, { message: 'Deve conter, pelo menos, um número' })
		.regex(/[^a-zA-Z0-9]/, {
			message: 'Deve conter, pelo menos, um caractere especial',
		})
		.trim(),
});

export type InputForm = z.infer<typeof formSchema>;
