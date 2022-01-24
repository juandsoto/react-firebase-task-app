import styles from '../../styles/Todo.module.css';
import ITodo from '../../interfaces/todo.interface';
import { useCallback } from 'react';

const Todo = (props: ITodo) => {
	const { id, category_id, title, status } = props;

	const todoProgress: string[] = ['pending', 'started', 'completed'];

	const statusColor = useCallback(() => {
		if (status === 'pending') return '#ff0000';
		if (status === 'started') return '#0000ff';
		if (status === 'completed') return '#00ff00';
	}, [status]);

	const updateStatus = () => {
		alert('Todo: implement this functionality');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.todo}>
				<div className={styles.title}>{title}</div>
				<button
					onClick={() => updateStatus()}
					disabled={status === 'completed'}
					className={styles.status}
					style={{
						backgroundColor: statusColor(),
						cursor: status === 'completed' ? 'not-allowed' : 'pointer'
					}}
				>
					{status}
				</button>
			</div>
			<button className={styles.trash}></button>
		</div>
	);
};

export default Todo;
