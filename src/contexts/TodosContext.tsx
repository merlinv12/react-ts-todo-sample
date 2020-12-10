import React, { useReducer, useContext, useEffect } from 'react';

const reducer = (
    todoState: TodosState,
    action: TodoAction,
): TodosState => {
    switch (action.type) {
        case "ADD":
            const nextId = Math.max(...todoState.todos.map(todo => todo.id)) + 1;
            const newTodo: Todo = {
                id: nextId,
                title: action.title,
                completed: false,
                date: action.date
            }
            return {
                ...todoState,
                todos: [...todoState.todos, newTodo]
            }
        case "DELETE":
            return {
                ...todoState,
                todos: todoState.todos.filter(todo => todo.id !== action.id)
            }
        case "TOGGLE":
            return {
                ...todoState,
                todos: todoState.todos.map(todo => 
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            }
        case "GET_TODOS":
            return {
                ...todoState,
                todos: [...action.new_todos]
            }
        default:
            throw new Error();
    }
}

export const TodosContext = React.createContext({} as TodosContextModel);

export const TodosContextProvider: React.FC = ({ children }) => {
    const initialState: TodosState = { todos: []}
    const [todoState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getTodos = () => {
            fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((res) => {
                return res.status === 200 ? res.json() : new Error();
            })
            .then((res) => dispatch({type: 'GET_TODOS', new_todos: res}))
            .catch((err) => console.error(err))
        }
        getTodos()
    }, [])

    return (
        <TodosContext.Provider value={{todoState, dispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

// example of a custom hook created from the context 
export const useTodoState = () => {
    const { todoState } = useContext(TodosContext)
    if (!todoState) {
        throw new Error('No context provider');
    }
    return todoState.todos;
}