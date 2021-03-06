import styles from '../../styles/CategoryList.module.css';
import { v4 as uuid } from 'uuid';
import Category from './Category';
import { useEffect, useRef, useState, useCallback } from 'react';
import db from '../../config/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import ICategory from '../../interfaces/category.interface';
import { useAuth } from '../../context/AuthProvider';

interface Props {
	setCurrentCtg: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = (props: Props) => {
	const { setCurrentCtg } = props;
	const [categories, setCategories] = useState<ICategory[]>([]);
	const formRef = useRef<HTMLFormElement>(null);
	const newCategoryRef = useRef<HTMLInputElement>(null);

	const { user } = useAuth();

	useEffect(() => {
		const getCategories = async () => {
			const q = query(
				collection(db, 'categories'),
				where('user_id', '==', user.uid)
			);
			const categoriesSnapshot = await getDocs(q);
			const categoriesList = categoriesSnapshot.docs.map(doc => {
				const { name, user_id } = doc.data();
				return { id: doc.id, name, user_id };
			});
			setCategories(categoriesList);
		};
		getCategories();
	}, []);

	const addCategory = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newCategoryRef.current?.value === '') return;
		const name = newCategoryRef.current?.value!;
		const category: Partial<ICategory> = {
			name,
			user_id: user.uid
		};

		try {
			const categoryRef = await addDoc(collection(db, 'categories'), category);
			setCategories(prev => [
				...prev,
				{ id: categoryRef.id, ...category } as ICategory
			]);
			newCategoryRef.current!.value = '';
			setCurrentCtg(categoryRef.id);
			console.log('category created');
		} catch (err) {
			console.error('Error adding document: ', err);
		}
	};

	const deleteCategory = (id: string) => {
		setCategories(prev => prev.filter(ctg => ctg.id !== id));
	};

	const categoriesColor: string[] = [
		'#391256',
		'#206cbd',
		'#44961d',
		'#aa1f93'
	];

	const chooseBgc = useCallback(index => index % 4, []);

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
			{!categories.length ? (
				<div className={styles.start}>
					<h3>Start by creating a category!</h3>
				</div>
			) : (
				<div className={styles.categoryList}>
					<Category
						setCurrentCtg={setCurrentCtg}
						{...{ id: '0', name: 'all', backgroundColor: '#f6c90e' }}
					/>
					{categories &&
						categories.map((category, index) => {
							return (
								<Category
									deleteCategory={deleteCategory}
									setCurrentCtg={setCurrentCtg}
									key={index}
									backgroundColor={categoriesColor[chooseBgc(index)]}
									{...category}
								/>
							);
						})}
				</div>
			)}
		</section>
	);
};

export default CategoryList;
