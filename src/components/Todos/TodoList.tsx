import { useEffect, useRef, useState } from 'react';
import {
	collection,
	addDoc,
	getDocs,
	query,
	where,
	serverTimestamp,
	orderBy
} from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import Todo from './Todo';
import styles from '../../styles/TodoList.module.css';

import db from '../../config/firebase';
import ITodo from '../../interfaces/todo.interface';
import { useAuth } from '../../context/AuthProvider';

interface Props {
	currentCtg: string;
}

const TodoList = (props: Props) => {
	const { currentCtg } = props;

	const [todos, setTodos] = useState<ITodo[]>([]);
	const [filter, setFilter] = useState('all');
	const formRef = useRef<HTMLFormElement>(null);
	const newTodoRef = useRef<HTMLInputElement>(null);

	const { user } = useAuth();

	useEffect(() => {
		const getTodos = async () => {
			const q = query(
				collection(db, 'tasks'),
				where('user_id', '==', user.uid),
				orderBy('timestamp', 'desc')
			);
			const todosSnapshot = await getDocs(q);
			const todoList: ITodo[] = todosSnapshot.docs.map(
				doc => ({ id: doc.id, ...doc.data() } as ITodo)
			);
			setTodos(todoList);
		};
		getTodos();
	}, []);

	const deleteTodo = (id: string) => {
		setTodos(prev => prev.filter(todo => id !== todo.id));
	};

	const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newTodoRef.current?.value === '') return;
		const title = newTodoRef.current?.value!;
		const todo: Partial<ITodo> = {
			title,
			category_id: currentCtg,
			status: 'pending',
			user_id: user.uid,
			timestamp: new Date()
		};

		try {
			const todoRef = await addDoc(collection(db, 'tasks'), todo);
			setTodos(prev => [...prev, { id: todoRef.id, ...todo } as ITodo]);
			newTodoRef.current!.value = '';
			console.log('todo created');
		} catch (err) {
			console.error('Error adding document: ', err);
		}
	};

	if (!currentCtg) return null;

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
						.filter(
							todo => todo.category_id === currentCtg || currentCtg === '0'
						)
						.filter(todo => todo.status === filter || filter === 'all')
						.map((todo, index) => {
							return (
								<Todo key={index} {...todo} deleteTodo={deleteTodo}></Todo>
							);
						})}
			</div>
		</section>
	);
};

export default TodoList;
