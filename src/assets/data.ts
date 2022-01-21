export interface ICategory {
	id: string;
	name: string;
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
		name: 'house'
	},
	{
		id: '2',
		name: 'gym'
	},
	{
		id: '3',
		name: 'homework'
	},
	{
		id: '4',
		name: 'ideas'
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
	},
	{
		id: '4',
		title: 'todo 4',
		category: '1',
		status: 'pending'
	},
	{
		id: '5',
		title: 'todo 5 todo',
		category: '4',
		status: 'started'
	},
	{
		id: '6',
		title: 'todo 6 do not forget',
		category: '1',
		status: 'completed'
	},
	{
		id: '7',
		title: 'drink a glass of water',
		category: '2',
		status: 'completed'
	},
	{
		id: '8',
		title: 'something todo',
		category: '2',
		status: 'pending'
	},
	{
		id: '9',
		title: 'something todo',
		category: '3',
		status: 'pending'
	},
	{
		id: '10',
		title: 'something todo',
		category: '3',
		status: 'pending'
	}
];
