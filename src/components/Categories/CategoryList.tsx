import styles from '../../styles/CategoryList.module.css';

import Category from './Category';
import { useEffect, useRef, useState } from 'react';
import db from '../../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import ICategory from '../../interfaces/category.interface';

interface Props {
	setCurrentCtg: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = (props: Props) => {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const formRef = useRef<HTMLFormElement>(null);
	const newCategoryRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const getCategories = async () => {
			const categoriesSnapshot = await getDocs(collection(db, 'categories'));
			const categoriesList = categoriesSnapshot.docs.map(doc => {
				const { name } = doc.data();
				return { id: doc.id, name };
			});
			setCategories(categoriesList);
		};
		getCategories();
	}, []);

	const addCategory = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newCategoryRef.current?.value === '') return;
		const name = newCategoryRef.current?.value!;

		try {
			const docRef = await addDoc(collection(db, 'categories'), {
				name
			});
			const newCategory: ICategory = { id: docRef.id, name };
			setCategories(prev => [...prev, newCategory]);
		} catch (err) {
			console.error('Error adding document: ', err);
		}

		newCategoryRef.current!.value = '';
	};

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
			<form
				ref={formRef}
				onSubmit={addCategory}
				noValidate
				autoComplete='off'
				className={styles.addCategoryContainer}
			>
				<input
					ref={newCategoryRef}
					className={styles.input}
					type='text'
					placeholder='Add new category...'
				/>
				<button type='submit' className={styles.addCategory}>
					Add
				</button>
			</form>
			<div className={styles.categoryList}>
				<Category
					setCurrentCtg={setCurrentCtg}
					{...{ id: '0', name: 'all', backgroundColor: '#f6c90e' }}
				/>
				{categories &&
					categories.map((category, index) => (
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
