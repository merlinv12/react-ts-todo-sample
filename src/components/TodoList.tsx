import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import { TodoListItem } from './TodoListItem';

export const TodoList: React.FC = () => {
    const {state: { todos }} = useContext(TodosContext);
    
    return (
        <ul>
            {todos.map( (todo: Todo) => 
                 <TodoListItem todo={todo}/>
            )}
        </ul>
    )
}