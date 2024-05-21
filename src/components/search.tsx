import TextField from '@mui/material/TextField';
import { useContextProject } from '../context';

export const Search = () => {
	const { setFilter } = useContextProject();

	return (
		<div>
			<TextField
				onChange={(e) => setFilter(e.target.value)}
				style={{ fontFamily: 'Rubik' }}
				className='bg-white rounded-md'
				id='outlined-basic'
				placeholder='Busca...'
				variant='outlined'
				size='small'
			/>
		</div>
	);
};
