import { useEffect, useRef, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import Todo from './Todo';
import styles from '../../styles/TodoList.module.css';

import db from '../../config/firebase';
import ITodo from '../../interfaces/todo.interface';

interface Props {
	currentCtg: string;
}

const TodoList = (props: Props) => {
	const { currentCtg } = props;

	const [todos, setTodos] = useState<ITodo[]>([]);
	const [filter, setFilter] = useState('all');
	const formRef = useRef<HTMLFormElement>(null);
	const newTodoRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const getTodos = async () => {
			const todosSnapshot = await getDocs(collection(db, 'tasks'));
			const todoList: ITodo[] = todosSnapshot.docs.map(doc => {
				const { title, category, status } = doc.data();
				return { id: doc.id, title, category, status };
			});
			setTodos(todoList);
		};
		getTodos();
	}, []);

	const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newTodoRef.current?.value === '') return;
		const title = newTodoRef.current?.value!;

		try {
			const docRef = await addDoc(collection(db, 'tasks'), {
				title,
				category: currentCtg,
				status: 'pending'
			});
			const newTodo: ITodo = {
				id: docRef.id,
				title,
				category: currentCtg,
				status: 'pending'
			};
			setTodos(prev => [...prev, newTodo]);
			console.log('Document written: ', docRef);
		} catch (err) {
			console.error('Error adding document: ', err);
		}

		newTodoRef.current!.value = '';
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
				<form
					ref={formRef}
					onSubmit={addTodo}
					noValidate
					autoComplete='off'
					className={styles.addTodoContainer}
				>
					<input
						ref={newTodoRef}
						className={styles.input}
						type='text'
						placeholder='Add new todo...'
					/>
					<button type='submit' className={styles.addTodo}>
						Add
					</button>
				</form>
			)}
			<div className={styles.todoList}>
				{todos &&
					todos
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
