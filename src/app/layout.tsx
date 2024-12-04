import { alumni, lovedBKing, loveYLSister } from '@/lib/fonts/fonts';
import '../styles/globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body
				className={`relative flex min-h-svh w-full antialiased ${alumni.className} ${loveYLSister.className} ${lovedBKing.className}`}
			>
				{children}
			</body>
		</html>
	);
}
