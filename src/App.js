import React, {useState, useRef} from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    todo: '',
    period: ''
  });
  const {todo, period} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const onCreate = () => {
    const todoItem = {
      id: nextId.current,
      todo,
      period
    };

    setTodos([...todos, todoItem]);

    setInputs({
      todo: '',
      period: ''
    });

    nextId.current += 1;
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>JSY - Todo List</h1>
      <br />
      <CreateTodo todo={todo} period={period} onChange={onChange} onCreate={onCreate} />
      <br />
      <TodoList todos={todos} onRemove={onRemove} />
    </>
  );
}

export default App;
