export default interface ITodo {
	id: string;
	title: string;
	category: string;
	status: 'pending' | 'started' | 'completed';
}
