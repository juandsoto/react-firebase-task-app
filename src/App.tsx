import Header from './components/Header';
import CategoryList from './components/Categories/CategoryList';
import './app.css';
import TodoList from './components/Todos/TodoList';
import { useState } from 'react';
import Login from './components/Auth/Login';
import { useAuth } from './context/AuthProvider';
const App = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [currentCtg, setCurrentCtg] = useState<string>('');

	const { user } = useAuth();

	return (
		<div className={`app ${darkMode && 'darkMode'}`}>
			<Header {...{ darkMode, setDarkMode }} />
			<main className='main'>
				{!user ? (
					<Login />
				) : (
					<>
						<CategoryList setCurrentCtg={setCurrentCtg} />
						<TodoList currentCtg={currentCtg} />
					</>
				)}
			</main>
		</div>
	);
};

export default App;
