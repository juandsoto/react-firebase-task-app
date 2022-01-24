import ICategory from '../../interfaces/category.interface';

import styles from '../../styles/Category.module.css';

interface Props extends Partial<ICategory> {
	setCurrentCtg: (x: string) => void;
	backgroundColor: string;
}

const Category = (props: Props) => {
	const { id, name, backgroundColor, setCurrentCtg } = props;
	return (
		<button
			onClick={() => setCurrentCtg(id!)}
			style={{ backgroundColor }}
			className={styles.category}
		>
			{name}
		</button>
	);
};

export default Category;
