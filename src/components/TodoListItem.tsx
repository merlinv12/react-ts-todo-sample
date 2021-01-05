import React from 'react';
// import { TodosContext } from '../contexts/TodosContext';

interface Props {
    todo: Todo;
    handleDelete: (todo: Todo) => void;
    toggle: (todo: Todo) =>;
}

const TodoListItem: React.FC<any> = ({todo, handleDelete, toggle}) => {
    return (
        <li>
            <span onClick={ () => toggle(todo)}>
                <input type='checkbox' />{todo.title}
            </span>
            <span>
                <button onClick={ () => handleDelete(todo)}>Delete</button>
            </span>
            <br />
            <span>
                {todo.date?.toTimeString()}
            </span>
        </li>
    )
}

export default React.memo(TodoListItem);
