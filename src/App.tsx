import React from 'react';
import { TodoList } from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';

const App = () => (
  <div>
    <h1>React + Typescript Todo Example</h1>
    <TodosContextProvider>
      <TodoList />
    </TodosContextProvider>
  </div>
)

export default App;
