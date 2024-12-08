'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { InputForm, formSchema } from '@/app/lib/zod';
import Button from './button';
import Link from 'next/link';

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<InputForm>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
	});

	const onSubmit = () => {
		reset();
	};

	return (
		<div
			className={clsx(
				'z-10 flex mt-[22rem] w-full flex-col gap-2 p-[1.8rem]',
			)}
		>
			<h2
				className={clsx(
					'text-center font-loveYLSister text-[2.4rem] text-greenCyprus',
				)}
			>
				Bem Vindo(a) !
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(
					'flex flex-col gap-9 rounded-[1.6rem] bg-blackPearl bg-opacity-[92%] p-[1.6rem]',
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
								'w-full border-b border-b-safetyOrange bg-transparent p-3 font-alumni text-[1.6rem] text-snow',
								'mobile414px:text-[1.8rem]',
							)}
						/>
						{errors.userName && (
							<span className="absolute left-0 top-full mt-1 font-alumni text-xl text-safetyOrange">
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
							<span className="absolute left-0 top-full mt-1 font-alumni text-xl text-safetyOrange">
								{errors.password.message}
							</span>
						)}
						<RiLockPasswordLine
							size={16}
							className="absolute right-2 top-1/2 -translate-y-1/2 text-greenSpring"
						/>
					</div>
				</div>

				<Button text="Entrar" className="mt-8" />
			</form>

			<div className="flex flex-col items-center pb-[1.6rem]">
				<Link
					href="/register"
					className="w-full rounded-[.6rem] bg-blackPearl p-[1rem] text-center font-alumni text-[1.6rem] text-snow underline underline-offset-4"
				>
					É novo por aqui? Cadastre-se clicando aqui.
				</Link>
			</div>
		</div>
	);
}
