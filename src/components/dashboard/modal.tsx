import { itensData } from './itens-data';
import ItensDetail from './itens-detail';
import { FaWindowClose } from 'react-icons/fa';

export default function ModalDetails() {
	return (
		<>
			<div className="absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[.8rem] bg-snow p-[1.6rem] shadow-[0_0_2rem_#000]">
				<ol className="flex flex-col gap-3">
					{itensData.map((item, index) => (
						<ItensDetail
							key={index}
							product={item.productName}
							qtd={item.quantidade}
							unitPrice={item.preço}
							total={item.total}
						/>
					))}
				</ol>
			</div>
			<button type="button" className="absolute right-16 top-16">
				<FaWindowClose
					size={26}
					className="bg-greenSpring text-blackPearl shadow-[0_0_1.4rem_#000] p-[.2rem] rounded-[.3rem]"
				/>
			</button>
		</>
	);
}
