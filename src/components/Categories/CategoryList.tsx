import styles from '../../styles/CategoryList.module.css';

import { categories } from '../../assets/data';
import Category from './Category';

interface Props {
	setCurrentCtg: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = (props: Props) => {
	const { setCurrentCtg } = props;

	return (
		<section id='categories'>
			<h2>Categories</h2>
			<div className={styles.categoryList}>
				<Category
					setCurrentCtg={setCurrentCtg}
					{...{ id: '0', name: 'all', backgroundColor: '#f6c90e' }}
				/>
				{categories.map(category => (
					<Category
						setCurrentCtg={setCurrentCtg}
						key={category.id}
						{...category}
					/>
				))}
			</div>
		</section>
	);
};

export default CategoryList;
