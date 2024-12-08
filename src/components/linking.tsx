import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

type DashboardLinksProps = {
	icon: ElementType;
	href: string;
};

export default function Linking(props: DashboardLinksProps) {
	const router = usePathname();
	const isActive = router === props.href;

	return (
		<Link href={props.href}>
			<props.icon
				size={30}
				className={clsx({
					'text-greenSpring': isActive,
					'text-snow': !isActive,
				})}
			/>
		</Link>
	);
}
