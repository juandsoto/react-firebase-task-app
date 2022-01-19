import { ICategory } from '../../assets/data';

import styles from '../../styles/Category.module.css';

const Category = (category: ICategory) => {
	const { name, backgroundColor } = category;
	return (
		<div style={{ backgroundColor }} className={styles.category}>
			{name}
		</div>
	);
};

export default Category;
