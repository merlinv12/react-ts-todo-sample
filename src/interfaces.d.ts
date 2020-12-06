interface Todo {
    id: number;
    description: string;
    done: boolean;
    date?: Date;
}

interface TodosState {
    todos: Todo[];
}

type TodoAction = 
    | { type: 'ADD'; description: string }
    | { type: 'DELETE'; id: number }
    | { type: 'TOGGLE'; id: number};

interface TodosContextModel {
    state: TodosState;
    dispatch: React.Dispatch<TodoAction>;
}