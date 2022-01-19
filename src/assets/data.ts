export interface ICategory {
	id: string;
	name: string;
	backgroundColor: string;
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
		backgroundColor: '#f6c90e'
	}
];
