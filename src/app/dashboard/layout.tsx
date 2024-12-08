'use client';

import { alumni, lovedBKing, loveYLSister } from '@/app/lib/fonts';
import NavDashboard from '@/components/dashboard/nav-dashboard';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { CiLogout } from 'react-icons/ci';
import '../../styles/globals.css';

export default function DashboardLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	const router = usePathname();
	const home = router === '/dashboard';

	return (
		<html lang="pt-br">
			<body
				className={`relative flex min-h-svh w-full antialiased ${alumni.className} ${loveYLSister.className} ${lovedBKing.className}`}
			>
				<div
					className="absolute inset-0 z-0 bg-blackPearl bg-repeat"
					style={{
						backgroundImage: "url('/bg-food.png')",
						backgroundSize: '200px',
					}}
				/>
				<div className="absolute inset-0 bg-blackPearl bg-opacity-[65%]" />

				<header className="fixed left-1/2 top-[4rem] z-10 flex w-[calc(100%-1.6rem)] -translate-x-1/2 rounded-[1.2rem] bg-greenSpring pb-[1rem] pl-[1.6rem] pr-[1.6rem] pt-[1rem]">
					<div className="flex w-full items-center justify-between">
						<h2 className="rounded-[.6rem] bg-blackPearl p-[.6rem] text-[2rem] tracking-wider text-snow">
							Olá, Leonardo
						</h2>
						<Link href="">
							<CiLogout
								size={30}
								className="rounded-[.6rem] bg-blackPearl p-[.2rem] text-safetyOrange"
							/>
						</Link>
					</div>
				</header>

				<div
					className={clsx(
						'absolute bottom-0 h-[52rem] w-full rounded-t-[4rem] p-[2rem]',
						{
							'bg-greenCyprus bg-opacity-[65%]': home,
							'bg-snow bg-opacity-100': !home,
						},
					)}
				>
					{children}
					<NavDashboard />
				</div>
			</body>
		</html>
	);
}
