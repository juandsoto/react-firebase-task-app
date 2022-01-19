import Header from './components/Header';
import { CategoryList } from './components/Categories';
import './app.css';
import { TodoList } from './components/Todos';
import { useState } from 'react';
const App = () => {
	const [currentCtg, setCurrentCtg] = useState('0');
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<CategoryList setCurrentCtg={setCurrentCtg} />
				<TodoList currentCtg={currentCtg} />
			</main>
		</div>
	);
};

export default App;
