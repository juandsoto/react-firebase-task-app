import styles from '../../styles/CategoryList.module.css';

import { categories } from '../../assets/data';
import { Category } from '.';

const CategoryList = () => {
	return (
		<section id='categories'>
			<h2>Categories</h2>
			<div className={styles.categoryList}>
				{categories.map(category => (
					<Category key={category.id} {...category} />
				))}
			</div>
		</section>
	);
};

export default CategoryList;
