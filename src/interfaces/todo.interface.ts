import { FieldValue } from 'firebase/firestore';

export default interface ITodo {
	id: string;
	title: string;
	category_id: string;
	status: 'pending' | 'started' | 'completed';
	user_id: string;
	timestamp: Date;
	// timestamp: FieldValue;
}
