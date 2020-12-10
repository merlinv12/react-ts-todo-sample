import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContext';


export const TodoAdd: React.FC = () => {
    const [title, setTitle] = useState('')
    const { dispatch } = useContext(TodosContext);

    const addTodoItem = (e: React.FormEvent) => {
        e.preventDefault()
        // Input validation function for inputs
        const submitTime = new Date();
        if ( title !== ''){
            dispatch({ type: "ADD", title: title, date: submitTime})
            setTitle('');
        }
    }

    return (
        <form onSubmit={addTodoItem}>
            <input 
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                placeholder="Add Todo Item"
            />
            <button>Add Todo Item</button>
        </form>
    )
}