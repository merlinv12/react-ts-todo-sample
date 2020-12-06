import React from 'react';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { TodosContextProvider } from './contexts/TodosContext';

const App = () => (
  <div>
    <h1>React + Typescript Todo Example</h1>
    <TodosContextProvider>
      <TodoList />
      <TodoAdd />
    </TodosContextProvider>
  </div>
)

export default App;
