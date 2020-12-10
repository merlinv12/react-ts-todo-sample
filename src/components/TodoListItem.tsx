import React, {useContext} from 'react';
import { TodosContext } from '../contexts/TodosContext';

interface Props {
    todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({todo}) => {
    const { dispatch } = useContext(TodosContext);

    const deleteTodoItem = () => dispatch({ type: 'DELETE', id: todo.id});
    const toggleTodoItem = () => dispatch({ type: 'TOGGLE', id: todo.id});
    return (
        <li>
            <span onClick={toggleTodoItem}>
                <input type='checkbox' checked={todo.completed} onChange={toggleTodoItem} />{todo.title}
            </span>
            <span>
                <button onClick={deleteTodoItem}>Delete</button>
            </span>
            <br />
            <span>
                {todo.date?.toTimeString()}
            </span>
        </li>
    )
}
