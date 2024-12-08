export type HistoryItemProps = {
	superMarketName: string;
	amount: string;
	date: string;
};

export default function HistoryItem(props: HistoryItemProps) {
	return (
		<li className="flex w-full items-center justify-between rounded-[.6rem] bg-blackPearl p-[1.2rem]">
			<div className="flex flex-col text-[1.4rem] text-snow">
				<span>{props.superMarketName}</span>
				<span>{props.amount}</span>
				<span>{props.date}</span>
			</div>
			<button className="text-[1.4rem] text-safetyOrange">Ver detalhes</button>
		</li>
	);
}
