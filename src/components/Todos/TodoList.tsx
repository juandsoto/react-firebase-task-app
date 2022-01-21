import Todo from './Todo';
import { todos as todoList } from '../../assets/data';
import styles from '../../styles/TodoList.module.css';
import { useState } from 'react';

interface Props {
	currentCtg: string;
}

const TodoList = (props: Props) => {
	const { currentCtg } = props;

	const [todos, setTodos] = useState(todoList);
	const [filter, setFilter] = useState('all');

	const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	return (
		<section id='todos'>
			<div className={styles.todoHeader}>
				<h2>Todos</h2>
				<select
					className={styles.filter}
					name='filterTodo'
					id='filterTodo'
					onChange={changeFilter}
				>
					<option value='all'>Filter by</option>
					<option value='pending'>pending</option>
					<option value='started'>started</option>
					<option value='completed'>completed</option>
				</select>
			</div>
			{currentCtg !== '0' && (
				<div className={styles.addTodoContainer}>
					<input
						className={styles.input}
						type='text'
						placeholder='Add new todo...'
					/>
					<button className={styles.addTodo}>Add</button>
				</div>
			)}
			<div className={styles.todoList}>
				{todos
					.filter(todo => todo.category === currentCtg || currentCtg === '0')
					.filter(todo => todo.status === filter || filter === 'all')
					.map(todo => {
						return <Todo key={todo.id} {...todo}></Todo>;
					})}
			</div>
		</section>
	);
};

export default TodoList;
