export interface ICategory {
	id: string;
	name: string;
	backgroundColor: string;
}

export interface ITodo {
	id: string;
	title: string;
	category: string;
	status: 'pending' | 'started' | 'completed';
}

export const categories: ICategory[] = [
	{
		id: '1',
		name: 'house',
		backgroundColor: '#391256'
	},
	{
		id: '2',
		name: 'gym',
		backgroundColor: '#0f4985'
	},
	{
		id: '3',
		name: 'homework',
		backgroundColor: '#44961d'
	},
	{
		id: '4',
		name: 'ideas',
		backgroundColor: '#1f1cc4'
	}
];

export const todos: ITodo[] = [
	{
		id: '1',
		title: 'Do homework',
		category: '3',
		status: 'pending'
	},
	{
		id: '2',
		title: 'Study react dnd',
		category: '3',
		status: 'started'
	},
	{
		id: '3',
		title: 'Clean my room',
		category: '1',
		status: 'completed'
	}
];
