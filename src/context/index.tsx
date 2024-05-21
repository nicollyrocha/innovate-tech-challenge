import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services';
import { IAlunos } from '../interfaces/alunos';

interface Props {
	children: React.ReactNode;
}

export const _useController = () => {
	const [alunos, setAlunos] = useState<IAlunos[]>([]);
	const [qtdAlunos, setQtdAlunos] = useState(20);
	const [carregandoMais, setCarregandoMais] = useState(false);
	const [aluno, setAluno] = useState<IAlunos | undefined>();
	const [gender, setGender] = useState('');
	const [filter, setFilter] = useState('');

	const getAlunos = async () => {
		try {
			const { data } = await api.get(`?results=${qtdAlunos}`);
			setAlunos(data.results);
		} catch (error: any) {
			return error.response.data;
		}
	};

	useEffect(() => {
		getAlunos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [qtdAlunos]);

	return {
		alunos,
		setQtdAlunos,
		qtdAlunos,
		carregandoMais,
		setCarregandoMais,
		aluno,
		setAluno,
		gender,
		setGender,
		setAlunos,
		filter,
		setFilter,
	};
};

const _Controller = createContext({} as ReturnType<typeof _useController>);

export const useContextProject = () => useContext(_Controller);

export const ContextProvider: React.FC<Props> = ({ children }) => {
	const controller = _useController();

	return (
		<_Controller.Provider value={controller}>{children}</_Controller.Provider>
	);
};
