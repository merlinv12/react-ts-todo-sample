import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContext';


export const TodoAdd: React.FC = () => {
    const [description, setDescription] = useState('')
    const { dispatch } = useContext(TodosContext);

    const addTodoItem = (e: React.FormEvent) => {
        e.preventDefault()
        // Input validation function for inputs
        if ( description !== ''){
            dispatch({ type: "ADD", description: description})
            setDescription('');
        }
    }

    return (
        <form onSubmit={addTodoItem}>
            <input 
                value={description}
                onChange={ (e) => setDescription(e.target.value)}
                placeholder="Add Todo Item"
            />
            <button>Add Todo Item</button>
        </form>
    )
}