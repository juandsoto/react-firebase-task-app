import { useCallback, useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../config/firebase';

import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/Todo.module.css';
import ITodo from '../../interfaces/todo.interface';

interface Props extends ITodo {
	deleteTodo: (id: string) => void;
}

const Todo = (props: Props) => {
	const { id, category_id, title, status, deleteTodo } = props;

	const todoProgress: string[] = ['pending', 'started', 'completed'];

	const [newTitle, setNewTitle] = useState(title);
	const [newStatus, setNewStatus] = useState(status);

	const statusColor = useCallback(() => {
		if (newStatus === 'pending') return '#ff0000';
		if (newStatus === 'started') return '#0000ff';
		if (newStatus === 'completed') return '#00ff00';
	}, [newStatus]);

	const updateStatus = async () => {
		const todoRef = doc(db, 'tasks', id);

		const currentStatus: number = todoProgress.indexOf(newStatus);
		const nextStatus: string =
			todoProgress[currentStatus === 2 ? 0 : currentStatus + 1];
		setNewStatus(nextStatus as 'pending' | 'started' | 'completed');
		await updateDoc(todoRef, {
			status: nextStatus
		});
		console.log('status updated');
	};

	const updateTitle = async () => {
		const todoRef = doc(db, 'tasks', id);
		await updateDoc(todoRef, {
			title: newTitle
		});
		console.log('title updated');
	};

	const deleteT = async () => {
		deleteTodo(id);
		const todoRef = doc(db, 'tasks', id);
		await deleteDoc(todoRef);
		console.log('todo deleted');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.todo}>
				<div className={styles.titleWrapper}>
					<EditIcon
						htmlColor='#f6c90e'
						style={{
							border: '1px solid #f6c90e',
							borderRadius: '50px',
							padding: '2px'
						}}
					/>
					<input
						className={styles.title}
						value={newTitle}
						onChange={e => setNewTitle(e.target.value)}
						onBlur={() => updateTitle()}
					/>
				</div>
				<button
					onClick={() => updateStatus()}
					className={styles.status}
					style={{
						backgroundColor: statusColor()
					}}
				>
					{newStatus}
				</button>
			</div>
			<button onClick={deleteT} className={styles.trash}></button>
		</div>
	);
};

export default Todo;
