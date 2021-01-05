import React, { useCallback, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import TodoListItem from './TodoListItem';

export const TodoList: React.FC = () => {
    const {todoState: { todos }, dispatch} = useContext(TodosContext);
    const deleteTodoItem = useCallback( todo => {
        dispatch({ type: 'DELETE', id: todo.id})
    }, [dispatch])

    const toggleTodoItem = useCallback((todo: Todo) => {
        dispatch({ type: 'TOGGLE', id: todo.id})
    }, [dispatch] 
    ) 
    

    // Custom Hook can be used here instead of using context
    // const todos = useTodoState();
    
    return todos.length > 0 ? (
        <ul>
            {todos.map( (todo: Todo) => 
                 <TodoListItem key={todo.id} todo={todo} handleDelete={deleteTodoItem} toggle={toggleTodoItem} />
            )}
        </ul>
    ) : <div>Nothing To Do!</div>
}