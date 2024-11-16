import React, {useState} from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

function App() {
  
  return (
    <>
      <h1>JSY - Todo List</h1>
      <br />
      <CreateTodo />
      <br />
      <TodoList />
    </>
  );
}

export default App;
