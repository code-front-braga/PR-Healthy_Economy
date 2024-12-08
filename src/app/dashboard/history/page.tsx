'use client';

import { historyData } from '@/components/dashboard/history-data';
import HistoryItem from '@/components/dashboard/history-item';
import ModalDetails from '@/components/dashboard/modal';
import clsx from 'clsx';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function History() {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isFiltered, setIsFiltered] = useState<string>('');
	const [filteredData, setFilteredData] = useState<typeof historyData>([]);

	const handleSearch = () => {
		if (isFiltered.trim() === '') {
			return;
		}
		const filtered = historyData.filter(item =>
			item.superMarketName.toLowerCase().includes(isFiltered.toLowerCase()),
		);
		setFilteredData(filtered);
		setIsActive(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setIsFiltered(value);

		if (value.trim() === '') {
			setFilteredData([]);
			setIsActive(false);
		}
	};

	return (
		<>
			<form>
				<div className="flex w-full items-center gap-2 p-2">
					<input
						value={isFiltered}
						onChange={handleInputChange}
						type="text"
						placeholder="supermercado"
						className="w-full rounded-[.6rem] border-b-2 border-safetyOrange bg-blackPearl p-[1rem] text-[1.6rem] text-snow"
					/>
					<button
						type="button"
						onClick={handleSearch}
						className={clsx(
							'rounded-[.6rem] border-b-2 border-safetyOrange bg-blackPearl p-[1rem]',
							{
								'border-greenSpring': isActive,
								'border-safetyOrange': !isActive,
							},
						)}
					>
						<BsSearch
							size={22}
							className={clsx({
								'text-greenSpring': isActive,
								'text-safetyOrange': !isActive,
							})}
						/>
					</button>
				</div>
			</form>

			<ol className="mt-6 flex h-[75%] flex-col gap-3 overflow-auto">
				{isActive &&
					filteredData.map((item, index) => (
						<HistoryItem
							key={index}
							superMarketName={item.superMarketName}
							amount={item.amount}
							date={item.date}
						/>
					))}
				{isActive && filteredData.length === 0 && (
					<p className="text-[1.6rem] text-blackPearl">
						Nehum supermercado encontrado.
					</p>
				)}
			</ol>

			<ModalDetails />
		</>
	);
}
