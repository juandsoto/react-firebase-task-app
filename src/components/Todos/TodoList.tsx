import { todos } from '../../assets/data';

interface Props {
	currentCtg: string;
}

const TodoList = (props: Props) => {
	const { currentCtg } = props;

	return (
		<section id='todos'>
			<h2>Todos</h2>
			{todos
				.filter(todo => todo.category === currentCtg || currentCtg === '0')
				.map(todo => {
					return <p key={todo.id}>{todo.title}</p>;
				})}
		</section>
	);
};

export default TodoList;
