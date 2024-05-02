import { ChangeEvent, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import '../app.css';

type SearchBoxProps = {
	value: string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	isDark: boolean;
};
export const SearchBox = ({ value, onInputChange, isDark }: SearchBoxProps) => {
	//const [placeholder, setPlaceholder] = useState('Search');

	// const handleBlur = () => {
	// 	if (!value) {
	// 		setPlaceholder('Search');
	// 	}
	// };

	return (
		<div
			className={`relative flex items-center
		${isDark ? 'bg-dark border-green-400' : 'bg-blue-200 border-green-800  border-2'} border  rounded-lg overflow-hidden`}>
			<div className='absolute ml-5'>
				<IoSearch
					className={`${isDark ? 'text-green-400' : 'text-black'}`}
					size={20}
				/>
			</div>
			<input
				type='text'
				id='search-box'
				placeholder='Search'
				className={`pl-12 pr-3 py-2.5 w-32 md:w-48 text-lg focus:border-none
				${isDark ? 'bg-dark text-white' : 'bg-blue-200 text-black'}
				rounded-lg placeholder:${isDark ? 'placeholder-black' : 'placeholder-black'}`}
				value={value}
				onChange={onInputChange}
				// onBlur={handleBlur}
			/>
		</div>
	);
};
