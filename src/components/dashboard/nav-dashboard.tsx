import { HiHome } from 'react-icons/hi2';
import { LuHistory } from 'react-icons/lu';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaListCheck } from 'react-icons/fa6';
import { GiTakeMyMoney } from 'react-icons/gi';
import Linking from '../linking';

export default function NavDashboard() {
	return (
		<div className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 rounded-t-[8rem] bg-blackPearl p-[1.6rem]">
			<ol className="flex w-full items-center justify-around">
				<Linking href="/dashboard" icon={HiHome} />
				<Linking href="/dashboard/history" icon={LuHistory} />
				<Linking href="/dashboard/create-list" icon={BsFillCartCheckFill} />
				<Linking href="/dashboard/show-list" icon={FaListCheck} />
				<Linking href="/dashboard/total-purchases" icon={GiTakeMyMoney} />
			</ol>
		</div>
	);
}
