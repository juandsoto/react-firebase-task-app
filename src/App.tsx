import Header from './components/Header';
import CategoryList from './components/Categories/CategoryList';
import './app.css';
import TodoList from './components/Todos/TodoList';
import { useState } from 'react';
const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [currentCtg, setCurrentCtg] = useState('0');
	return (
		<div className={`app ${darkMode && 'darkMode'}`}>
			<Header {...{ darkMode, setDarkMode }} />
			<main className='main'>
				<CategoryList setCurrentCtg={setCurrentCtg} />
				<TodoList currentCtg={currentCtg} />
			</main>
		</div>
	);
};

export default App;
