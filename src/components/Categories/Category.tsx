import { ICategory } from '../../assets/data';

import styles from '../../styles/Category.module.css';

interface Props extends ICategory {
	setCurrentCtg: React.Dispatch<React.SetStateAction<string>>;
	backgroundColor: string;
}

const Category = (props: Props) => {
	const { id, name, backgroundColor, setCurrentCtg } = props;
	return (
		<button
			onClick={() => setCurrentCtg(id)}
			style={{ backgroundColor }}
			className={styles.category}
		>
			{name}
		</button>
	);
};

export default Category;
