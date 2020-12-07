import React from 'react';
import { useTodoState } from '../contexts/TodosContext';
import { TodoListItem } from './TodoListItem';

export const TodoList: React.FC = () => {
    // const {state: { todos }} = useContext(TodosContext);
    // Custom Hook can be used here instead of using context
    const todos = useTodoState();
    
    return todos.length > 0 ? (
        <ul>
            {todos.map( (todo: Todo) => 
                 <TodoListItem key={todo.id} todo={todo}/>
            )}
        </ul>
    ) : <div>Nothing To Do!</div>
}