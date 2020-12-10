interface Todo {
    userId?: number;
    id: number;
    title: string;
    completed: boolean;
    date?: Date;
}

interface TodosState {
    todos: Todo[];
}

type TodoAction = 
    | { type: 'ADD'; title: string; date: Date }
    | { type: 'DELETE'; id: number }
    | { type: 'TOGGLE'; id: number}
    | { type: 'GET_TODOS'; new_todos: Todo[]; };

interface TodosContextModel {
    todoState: TodosState;
    dispatch: React.Dispatch<TodoAction>;
}