import { Delete } from '@mui/icons-material';
import { deleteDoc, doc } from 'firebase/firestore';
import db from '../../config/firebase';
import ICategory from '../../interfaces/category.interface';

import styles from '../../styles/Category.module.css';

interface Props extends Partial<ICategory> {
	setCurrentCtg: (x: string) => void;
	backgroundColor: string;
	deleteCategory?: (id: string) => void;
}

const Category = (props: Props) => {
	const { id, name, backgroundColor, setCurrentCtg, deleteCategory } = props;

	const deleteCtg = async () => {
		deleteCategory && deleteCategory(id!);
		setCurrentCtg('0');
		const categoryRef = doc(db, 'categories', id!);
		await deleteDoc(categoryRef);
		console.log('category deleted');
	};

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => setCurrentCtg(id!)}
				style={{ backgroundColor }}
				className={styles.category}
			>
				{name}
			</button>
			{id !== '0' && (
				<div className={styles.deleteContainer}>
					<button onClick={deleteCtg} className={styles.delete}>
						<Delete htmlColor='#000000' />
					</button>
				</div>
			)}
		</div>
	);
};

export default Category;
