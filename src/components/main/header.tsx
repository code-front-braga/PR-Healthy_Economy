import clsx from 'clsx';

export default function MainHeader() {
	return (
		<header
			className={clsx(
				'fixed top-0 flex h-[20rem] w-full rounded-b-[10rem] bg-blackPearl bg-opacity-90 text-center text-[3.2rem]',
			)}
		>
			<div className="m-auto flex w-full flex-col items-center">
				<h1
					className={clsx(
						'w-[50%] font-loveYLSister text-[3rem] tracking-widest text-snow',
					)}
				>
					Economia{' '}
					<span className={clsx('text-[4.2rem] text-greenSpring')}>$</span>
					audável
				</h1>
				<span className="font-lovedBKing text-[1.8rem] tracking-widest text-snow">
					Cuidando do seu bolso
				</span>
			</div>
		</header>
	);
}
