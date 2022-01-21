import styles from '../../styles/CategoryList.module.css';

import { categories } from '../../assets/data';
import Category from './Category';

interface Props {
	setCurrentCtg: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = (props: Props) => {
	const { setCurrentCtg } = props;
	const categoriesColor: string[] = [
		'#391256',
		'#0f4985',
		'#44961d',
		'#1f1cc4'
	];

	return (
		<section id='categories' className={styles.categories}>
			<h2>Categories</h2>
			<div className={styles.categoryList}>
				<Category
					setCurrentCtg={setCurrentCtg}
					{...{ id: '0', name: 'all', backgroundColor: '#f6c90e' }}
				/>
				{categories.map((category, index) => (
					<Category
						setCurrentCtg={setCurrentCtg}
						key={category.id}
						backgroundColor={categoriesColor[index]}
						{...category}
					/>
				))}
			</div>
		</section>
	);
};

export default CategoryList;
