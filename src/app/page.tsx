'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { z } from 'zod';

const SignupFormSchema = z.object({
	userName: z
		.string()
		.min(2, { message: 'O usuário deve conter, pelo menos, 2 dígitos' })
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

type InputForm = z.infer<typeof SignupFormSchema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset,
	} = useForm<InputForm>({
		resolver: zodResolver(SignupFormSchema),
		mode: 'onChange',
	});

	const handleForm = () => {
		alert('ok')
	};

	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: "url('/bg-food.png')",
					backgroundSize: '200px',
				}}
			/>
			<div className="absolute inset-0 bg-snow bg-opacity-65" />

			<header
				className={clsx(
					'fixed top-0 flex h-[20rem] w-full rounded-b-[10rem] bg-blackPearl bg-opacity-90 text-center text-[3.2rem]',
				)}
			>
				<h1
					className={clsx(
						'font-loveYLSister m-auto w-[50%] text-[3rem] tracking-widest text-snow',
					)}
				>
					Economia{' '}
					<span className={clsx('text-[4.2rem] text-greenSpring')}>$</span>
					audável
				</h1>
			</header>

			<div
				className={clsx(
					'z-10 m-auto mt-[20rem] flex w-full flex-col gap-4 p-[1.8rem]',
					'mobile360px:mt-[30rem]',
				)}
			>
				<h2
					className={clsx(
						'font-loveYLSister text-center text-[2.8rem] text-greenCyprus',
					)}
				>
					Bem Vindo(a) !
				</h2>

				<form
					onSubmit={handleSubmit(handleForm)}
					className={clsx(
						'flex flex-col gap-14 rounded-[1.6rem] bg-blackPearl bg-opacity-[92%] p-[1.6rem]',
						'mobile414px:gap-20',
					)}
				>
					<div className={clsx('flex flex-col gap-8', 'mobile414px:gap-12')}>
						<div className="relative flex w-full">
							<input
								{...register('userName')}
								type="text"
								placeholder="usuário"
								className={clsx(
									'font-alumni w-full border-b border-b-safetyOrange bg-transparent p-3 text-[1.6rem] text-snow',
									'mobile414px:text-[1.8rem]',
								)}
							/>
							{errors.userName && (
								<span className="font-alumni absolute left-0 top-full mt-1 text-xl text-safetyOrange">
									{errors.userName.message}
								</span>
							)}
							<FaUser
								size={16}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-greenSpring"
							/>
						</div>

						<div className="relative flex w-full">
							<input
								{...register('password')}
								type="password"
								placeholder="senha"
								className={clsx(
									'w-full border-b border-b-safetyOrange bg-transparent p-3 text-[1.6rem] text-snow',
									'mobile414px:text-[1.8rem]',
								)}
							/>
							{errors.password && (
								<span className="font-alumni absolute left-0 top-full mt-1 text-xl text-safetyOrange">
									{errors.password.message}
								</span>
							)}
							<RiLockPasswordLine
								size={16}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-greenSpring"
							/>
						</div>
					</div>
					<button
						className={clsx(
							'font-alumni w-full rounded-[.6rem] bg-greenSpring p-4 text-[1.6rem]',
							'mobile414px:text-[1.8rem]',
						)}
					>
						Entrar
					</button>
				</form>
			</div>
		</>
	);
}
