import { useState } from 'react';
import type { Coin } from '../../types/data-types';
import { StarComponent } from './StarComponent';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { formatPrice, formatDate } from '../../utils/formatters';
import { sevenDayTrend } from '../../types/data-types';

type CoinsListProps = {
	filteredCoins: Coin[] | undefined;
	isDark: boolean;
};

type SortableCoinKeys = 'market_cap_rank' | 'current_price' | 'name' | 'total_volume';

export const CoinsList = ({ filteredCoins, isDark }: CoinsListProps) => {
	const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
	const [sortColumn, setSortColumn] = useState<SortableCoinKeys | null>(null);
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

	const handleSort = (columnName: SortableCoinKeys) => {
		if (sortColumn === columnName) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
			setSortColumn(columnName);
			setSortDirection('asc');
		}
	};

	const sortedCoins =
		filteredCoins?.sort((a, b) => {
			if (!sortColumn) return 0;
			const valueA = a[sortColumn as keyof Coin];
			const valueB = b[sortColumn as keyof Coin];
			if (valueA == null || valueB == null) return 0;

			if (sortDirection === 'asc') {
				return valueA < valueB ? -1 : 1;
			} else {
				return valueA > valueB ? -1 : 1;
			}
		}) || [];

	const showModal = (coin: Coin) => setSelectedCoin(coin);

	const closeModal = () => setSelectedCoin(null);

	const commonStyles = 'py-3 px-1 font-semibold 2lg:pl-2.5 md:pl-4.5 whitespace-nowrap';

	if (!filteredCoins) {
		return <p>Loading...</p>;
	}

	if (!sortedCoins || sortedCoins.length === 0) {
		return <p className='text-[clamp(1rem,2vw+1rem,2rem)] text-center my-40'>No coins match your search criteria!</p>;
	}

	return (
		<div className='w-full sm:w-11/12 mx-auto'>
			<table className='w-full sortable'>
				<thead className='overflow-y-hidden overflow-x-hidden sticky top-0 z-40'>
					<tr className={`${isDark ? 'bg-gray-200' : 'bg-dark'} p-0 h-px  no-sort double-border`}>
						<th colSpan={14}></th>
					</tr>
					<tr>
						<th
							className={`${commonStyles} flex flex-nowrap items-center gap-2 text-right sticky left-[10px] min-w-[24px] md:min-w-10 pl-2 md:pl-8 cursor-pointer`}
							onClick={() => handleSort('market_cap_rank')}>
						#	{sortColumn === 'market_cap_rank' && (sortDirection === 'asc' ? <FaCaretUp /> : <FaCaretDown />)}
						</th>
						<th className={`${commonStyles} text-left pl-2 sticky left-[60px] md:left-[24px] md:min-w-10 indicator-left cursor-pointer`}>Coin</th>
						<th className={`${commonStyles} text-right  md:left-[12px] md:min-w-[48px] indicator-left cursor-pointer`}>Price</th>
						<th className={`${commonStyles} text-right  left-[51px] md:left-[52px] min-w-[100px] 2lg:min-w-[150px] md:table-cell`}>24h</th>
						<th className={`${commonStyles} text-right indicator-left min-w-[100px] 2lg:min-w-[150px] md:table-cell`}>7d</th>
						<th className={`${commonStyles} text-right min-w-[150px] indicator-left cursor-pointer md:table-cell`}>24h Volume</th>
						<th className={`${commonStyles} text-right min-w-[150px] indicator-left cursor-pointer md:table-cell`}>Market Cap</th>
						<th className={`${commonStyles} text-end min-w-[160px] pr-2 md:pr-8 no-sort md:table-cell`}>Last 7 Days</th>
					</tr>
					<tr className={`${isDark ? 'bg-gray-200' : 'bg-dark'} p-0 h-px  no-sort double-border`}>
						<th colSpan={14}></th>
					</tr>
				</thead>
				<tbody className='divide-y min-w-full overflow-x-hidden'>
					{sortedCoins.map(coin => (
						<tr
							key={uuid()}
							className={`${isDark ? 'border-y-white' : 'border-y-dark'}`}>
							<td>
								<div
									className={`${commonStyles} border-y-dark z-10 left-[10px] min-w-[24px] md:min-w-10 flex items-center gap-2 text-center sticky pl-2 md:pl-8 no-sort cursor-pointer`}>
									<StarComponent isDarkMode={isDark} />
									{coin.market_cap_rank}
								</div>
							</td>
							<td>
								<div className={`${commonStyles} flex text-left sticky left-[10px] items-center flex-nowrap`}>
									<div className='z-50 object-contain w-8 mr-2 border-y-dark'>
										<img
											src={coin.image}
											alt={`Image of ${coin.id}`}
										/>
									</div>
									<div className='flex flex-col md:gap-1 md:flex-row xl:justify-start xl:items-center md:items-baseline'>
										<span className='z-10 font-semibold left-[10px] min-w-[24px] md:min-w-10 text-name sticky whitespace-nowrap '>{coin.name}</span>
										<span className='z-10 left-[60px] min-w-[24px] md:min-w-10 font-thin text-symbol align-baseline md:justify-end'>({`${coin.symbol.toUpperCase()}`})</span>
									</div>
								</div>
							</td>
							<td className={`${commonStyles} md:text-right md:left-[12px] md:min-w-[48px]`}>{formatPrice(coin.current_price)}</td>
							<td className={`${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-600'}`}>
								<div className={`${commonStyles} flex justify-end items-center `}>
									{coin.price_change_percentage_24h < 0 ? <FaCaretDown /> : <FaCaretUp />}
									{Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
								</div>
							</td>
							<td className={`${sevenDayTrend(coin) < 0 ? 'text-red-500' : 'text-green-600'}`}>
								<div className={`${commonStyles} hidden md:flex md:justify-end md:items-center `}>
									{sevenDayTrend(coin) < 0 ? <FaCaretDown /> : <FaCaretUp />}
									{Math.abs(sevenDayTrend(coin)).toFixed(1)}%
								</div>
							</td>
							<td className={`${commonStyles} text-right`}>{formatPrice(coin.total_volume)}</td>
							<td className={`${commonStyles} text-right`}>{formatPrice(coin.market_cap)}</td>
							<td>
								<div
									className='hidden md:block md:ml-16 md:min-w-[80px] md:h-14 md:mt-2 md:cursor-pointer'
									onClick={() => showModal(coin)}>
									<VictoryChart>
										<VictoryLine
											data={coin.sparkline_in_7d.price.map((price, i) => ({
												x: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (i * (24 * 60 * 60 * 1000)) / coin.sparkline_in_7d.price.length),
												y: price,
											}))}
											style={{
												data: { stroke: sevenDayTrend(coin) >= 0 ? 'green' : 'red' },
											}}
										/>
									</VictoryChart>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedCoin && (
				<div
					className='fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center cursor-pointer'
					onClick={closeModal}>
					<div
						className='bg-white absolute z-50 top-15 m-4 p-20 dark:bg-[#333] rounded-lg cursor-auto'
						onClick={e => e.stopPropagation()}>
						<h1 className='text-black text-name flex gap-1 justify-center items-center'>
							<p>{selectedCoin.name}</p>
							<p className='text-symbol'>({selectedCoin.symbol.toLocaleUpperCase()})</p>
						</h1>
						<VictoryChart padding={{ top: 20, bottom: 50, left: 50, right: 50 }}>
							<VictoryAxis
								dependentAxis
								style={{
									axis: { stroke: isDark ? 'black' : 'white' }, // Adjust axis color based on theme
									tickLabels: { fill: isDark ? 'black' : 'white' }, // Adjust tick label color based on theme
								}}
							/>
							{/* <VictoryAxis
								tickValues={Array.from({ length: 7 }, (_, index) => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + index * (24 * 60 * 60 * 1000)))}
								tickFormat={x => `${x.toLocaleDateString()}`}
								style={{
									axis: { stroke: isDarkMode ? 'black' : 'white' },
									tickLabels: {
										fill: isDarkMode ? 'black' : 'white',
										fontSize: 10,
										angle: 0, // You may adjust this based on your layout needs
										verticalAnchor: 'middle',
										textAnchor: 'middle', // Adjusted for better alignment
									},
								}}
							/> */}

							<VictoryAxis
								tickValues={Array.from({ length: 7 }, (_, index) => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + index * (24 * 60 * 60 * 1000)))}
								tickFormat={x => {
									const date = new Date(x);
									return `${formatDate(date)}`;
								}}
								style={{
									axis: { stroke: isDark ? 'black' : 'white' },
									tickLabels: {
										fill: isDark ? 'black' : 'white',
										fontSize: 10,
										angle: 45,
										verticalAnchor: 'middle',
										textAnchor: 'start',
									},
								}}
							/>

							<VictoryLine
								data={selectedCoin.sparkline_in_7d.price.map((price, i) => ({
									x: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (i * (24 * 60 * 60 * 1000) * 7) / selectedCoin.sparkline_in_7d.price.length),
									y: price,
								}))}
								style={{
									data: { stroke: sevenDayTrend(selectedCoin) >= 0 ? 'green' : 'red' },
								}}
							/>
						</VictoryChart>
					</div>
				</div>
			)}
		</div>
	);
};
