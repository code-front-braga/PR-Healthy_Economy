import clsx from 'clsx';

import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function Login() {
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
					className={clsx(
						'flex flex-col gap-14 rounded-[1.6rem] bg-blackPearl bg-opacity-[92%] p-[1.6rem]',
						'mobile414px:gap-20',
					)}
				>
					<div className={clsx('flex flex-col gap-8', 'mobile414px:gap-12')}>
						<div className="relative flex w-full">
							<input
								type="text"
								placeholder="usuário"
								className={clsx(
									'font-alumni w-full border-b border-b-safetyOrange bg-transparent p-3 text-[1.6rem] text-snow',
									'mobile414px:text-[1.8rem]',
								)}
							/>
							<FaUser
								size={16}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-greenSpring"
							/>
						</div>

						<div className="relative flex w-full">
							<input
								type="password"
								placeholder="senha"
								className={clsx(
									'w-full border-b border-b-safetyOrange bg-transparent p-3 text-[1.6rem] text-snow',
									'mobile414px:text-[1.8rem]',
								)}
							/>
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
