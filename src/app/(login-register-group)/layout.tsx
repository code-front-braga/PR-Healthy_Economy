import { alumni, lovedBKing, loveYLSister } from '@/app/lib/fonts';
import '../../styles/globals.css';
import MainHeader from '@/components/main/header';
import MainFooter from '@/components/main/footer';
import MainBackground from '@/components/main/background';

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
				<MainBackground />
				<MainHeader />
				{children}
				<MainFooter />
			</body>
		</html>
	);
}
