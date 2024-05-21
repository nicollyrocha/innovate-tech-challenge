import { Button } from '@mui/material';
import { Header } from '../components/header';
import { List } from '../components/list';
import { useContextProject } from '../context';
import { Loading } from '../components/loading';

export const Home = () => {
	const { setQtdAlunos, qtdAlunos, alunos, setCarregandoMais, carregandoMais } =
		useContextProject();

	if (alunos.length === 0)
		return (
			<div className='flex items-center h-screen ease-in-out duration-300 animate-pulse'>
				<Loading />
			</div>
		);

	const clickVerMais = () => {
		setCarregandoMais(true);
		setTimeout(() => {
			setQtdAlunos(qtdAlunos + 20);
			setCarregandoMais(false);
		}, 1500);
	};

	return (
		<div className='flex flex-col gap-10 pb-10'>
			<Header />
			<List />
			{carregandoMais ? (
				<div className='flex flex-col items-center gap-2'>
					<svg
						width='20'
						height='20'
						fill='currentColor'
						className='mr-2 animate-spin'
						viewBox='0 0 1792 1792'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
					</svg>
					<div>CARREGANDO MAIS</div>
				</div>
			) : (
				<Button onClick={() => clickVerMais()}>Ver mais</Button>
			)}
		</div>
	);
};
