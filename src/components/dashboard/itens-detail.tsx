type ItensDetailProps = {
	product: string;
	qtd: string;
	unitPrice: string;
	total: string;
};

export default function ItensDetail(props: ItensDetailProps) {
	return (
		<li className="flex w-full items-center justify-between rounded-[.6rem] bg-blackPearl pb-[.4rem] pl-[1.2rem] pr-[1.2rem] pt-[.4rem]">
			<div className="flex flex-col text-[1.6rem] text-snow">
				<span>Produto: {props.product}</span>
				<span>Quantidade: {props.qtd}</span>
				<span>Preço (Un): {props.unitPrice}</span>
			</div>
			<span className="flex flex-col text-[1.6rem] text-snow">
				Total: <span className="text-greenSpring">{props.total}</span>
			</span>
		</li>
	);
}
