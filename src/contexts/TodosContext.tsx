import React, { useReducer } from 'react';

const exampleState: TodosState = {
    todos: [
        {
            id: 1,
            description: 'practice typescript',
            done: false,
        },
        {
            id: 2,
            description: 'practice react hooks',
            done: false,
        }
    ]
}


const reducer = (
    state: TodosState,
    action: TodoAction,
): TodosState => {
    switch (action.type) {
        case "ADD":
            const nextId = Math.max(...state.todos.map(todo => todo.id)) + 1;
            const newTodo = {
                id: nextId,
                description: action.description,
                done: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                )
            }
        default:
            throw new Error();
    }
}

export const TodosContext = React.createContext({} as TodosContextModel);

export const TodosContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, exampleState);

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            {children}
        </TodosContext.Provider>
    )
}