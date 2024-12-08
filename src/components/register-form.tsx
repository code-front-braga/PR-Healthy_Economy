'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { InputForm, formSchema } from '@/app/lib/zod';
import Button from './button';

export default function RegisterForm() {
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
				'z-10 m-auto mt-[22rem] flex w-full flex-col gap-2 p-[1.8rem]',
			)}
		>
			<h2
				className={clsx(
					'text-center font-loveYLSister text-[1.4rem] text-greenCyprus',
				)}
			>
				Para começar a cuidar do seu bolso, cadastre-se abaixo!
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(
					'flex flex-col gap-4 rounded-[1.6rem] bg-blackPearl bg-opacity-[92%] p-[1.6rem]',
					'mobile414px:gap-20',
				)}
			>
				<div className="relative flex w-full">
					<input
						{...register('email')}
						type="text"
						placeholder="email"
						className={clsx(
							'w-full border-b border-b-safetyOrange bg-transparent p-3 font-alumni text-[1.6rem] text-snow',
							'mobile414px:text-[1.8rem]',
						)}
					/>
					{errors.email && (
						<span className="absolute left-0 top-full mt-1 font-alumni text-xl text-safetyOrange">
							{errors.email.message}
						</span>
					)}
					<MdEmail
						size={16}
						className="absolute right-2 top-1/2 -translate-y-1/2 text-greenSpring"
					/>
				</div>
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
				<Button text="Cadastrar" className="mt-8" />
			</form>
		</div>
	);
}
