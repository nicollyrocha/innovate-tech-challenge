import {
	Button,
	FormControlLabel,
	IconButton,
	Menu,
	Radio,
	RadioGroup,
} from '@mui/material';
import { Search } from './search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContextProject } from '../context';

export const Header = () => {
	const { setGender, gender } = useContextProject();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onChangeFilter = async (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		setGender((e.target as HTMLInputElement).value);
	};

	return (
		<div className='bg-purple-600 p-5 flex flex-col gap-5 items-center fixed z-50 w-full'>
			<div className='font-bold text-white text-xl' onClick={() => navigate('/')}>
				InnovateTech
			</div>
			<div className='flex gap-2 items-center'>
				<Search />
				<IconButton onClick={handleClick}>
					<FilterAltIcon className='text-purple-900' />
				</IconButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<div className='px-2'>
						<div>Gênero:</div>
						<RadioGroup value={gender || ''} onClick={(e) => onChangeFilter(e)}>
							<FormControlLabel value='female' control={<Radio />} label='Female' />
							<FormControlLabel value='male' control={<Radio />} label='Male' />
						</RadioGroup>
						<Button onClick={() => setGender('')}>Limpar Filtro</Button>
					</div>
				</Menu>
			</div>
		</div>
	);
};
