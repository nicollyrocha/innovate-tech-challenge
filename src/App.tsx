import './App.css';
import { Home } from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ContextProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Aluno } from './pages/aluno';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				light: '#7e57c2',
				main: '#512da8',
				dark: '#311b92',
				contrastText: '#fff',
			},
		},
	});

	return (
		<ContextProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/aluno/:id' element={<Aluno />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</ContextProvider>
	);
}

export default App;
