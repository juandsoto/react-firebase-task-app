import trash from '../../assets/trash.svg';
import styles from '../../styles/Todo.module.css';
import { ITodo } from '../../assets/data';
import { useCallback } from 'react';

const Todo = (props: ITodo) => {
	const { id, category, title, status } = props;
	const statusColor = useCallback(() => {
		if (status === 'pending') return '#ff0000';
		if (status === 'started') return '#0000ff';
		if (status === 'completed') return '#00ff00';
	}, [status]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.todo}>
				<div className={styles.title}>{title}</div>
				<button
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
