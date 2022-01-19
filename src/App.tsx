import Header from './components/Header';
import { CategoryList } from './components/Categories';
import './app.css';
const App = () => {
	return (
		<div className='app'>
			<Header />
			<main>
				<CategoryList />
			</main>
		</div>
	);
};

export default App;
