import clsx from 'clsx';

type ButtonProps = {
	text: string;
	className: string;
};

export default function Button({ text, className }: ButtonProps) {
	return (
		<button
			type="submit"
			className={clsx(
				'w-full rounded-[.6rem] bg-greenSpring p-4 font-alumni text-[1.6rem]',
				'mobile414px:text-[1.8rem]',
				className,
			)}
		>
			{text}
		</button>
	);
}
