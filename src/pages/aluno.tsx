import { Avatar } from '@mui/material';
import { Loading } from '../components/loading';
import { Header } from '../components/header';
import { timeStampToDate } from '../functions/timestampToDate';
import { useContextProject } from '../context';

export const Aluno = () => {
	const { aluno } = useContextProject();

	if (!aluno)
		return (
			<div className='flex items-center h-screen ease-in-out duration-300 animate-pulse'>
				<Loading />
			</div>
		);

	return (
		<div className='flex flex-col gap-10 pb-10'>
			<Header />
			<div className='flex flex-col items-start gap-3 px-10 mt-40'>
				<Avatar
					style={{ width: '170px', height: '170px' }}
					alt={aluno.name.first}
					src={aluno.picture.large}
					className='self-center'
				/>
				<div className='font-semibold flex gap-2 items-center'>
					Nome:
					<div className='font-normal'>{`${aluno.name.first} ${aluno.name.last}`}</div>
				</div>
				<div className='font-semibold flex gap-2 items-center'>
					E-mail:
					<div className='font-normal'>{`${aluno.email}`}</div>
				</div>
				<div className='font-semibold flex gap-2 items-center'>
					Gênero:
					<div className='font-normal'>{`${aluno.gender}`}</div>
				</div>
				<div className='font-semibold flex gap-2 items-center'>
					Data de nascimento:
					<div className='font-normal'>{`${timeStampToDate(aluno.dob.date)}`}</div>
				</div>
				<div className='font-semibold flex gap-2 items-center'>
					Telefone:
					<div className='font-normal'>{`${aluno.cell}`}</div>
				</div>
				<div className='font-semibold flex gap-2 items-center'>
					Nacionalidade:
					<div className='font-normal'>{`${aluno.nat}`}</div>
				</div>
				<div className='font-semibold items-center w-full'>
					Endereço:
					<span className='font-normal pl-2'>
						{`${aluno.location.street.name}, ${aluno.location.street.number}. ${aluno.location.city}, ${aluno.location.state} - ${aluno.location.country}`}
					</span>
				</div>
				<div className='font-semibold items-center w-full'>
					ID:
					<span className='font-normal pl-2'>{`${aluno.login.uuid}`}</span>
				</div>
			</div>
		</div>
	);
};
