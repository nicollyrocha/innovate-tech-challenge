import { Avatar, Card, CardContent } from '@mui/material';
import { useContextProject } from '../context';
import { timeStampToDate } from '../functions/timestampToDate';
import { useNavigate } from 'react-router-dom';
import { IAlunos } from '../interfaces/alunos';

export const List = () => {
	const { alunos, setAluno, gender, filter } = useContextProject();
	const navigate = useNavigate();

	const onClick = (aluno: IAlunos) => {
		setAluno(aluno);
		navigate(`/aluno/${aluno.login.uuid}`);
	};

	return (
		<div className='flex flex-col items-center gap-5 mt-40'>
			{alunos
				.filter(
					(al) =>
						(gender
							? al.gender === gender
							: al.gender === 'male' || al.gender === 'female') &&
						(al.name.first.toLowerCase().indexOf(filter) > -1 ||
							al.name.last.toLowerCase().indexOf(filter) > -1)
				)
				.map((aluno) => {
					return (
						<Card
							key={aluno.login.uuid}
							className='w-10/12 cursor-pointer'
							style={{ backgroundColor: '#9370DB' }}
							onClick={() => onClick(aluno)}
						>
							<CardContent className='flex items-center gap-5 w-full hover:bg-purple-300 transition ease-in-out duration-300 active:bg-purple-400'>
								<Avatar
									style={{ width: '65px', height: '65px' }}
									alt={aluno.name.first}
									src={aluno.picture.large}
								/>
								<div className='w-full flex flex-col gap-4'>
									<div className='self-start'>
										{aluno.name.first + ' ' + aluno.name.last}
									</div>
									<div className='flex justify-between'>
										<div>{aluno.gender}</div>
										<div>{timeStampToDate(aluno.dob.date)}</div>
									</div>
								</div>
							</CardContent>
						</Card>
					);
				})}
		</div>
	);
};
