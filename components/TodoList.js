import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'fishing', detail: 'I need to go fishing.' },
    { id: 2, title: 'baking', detail: 'I have to learn baking.' },
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <div key="todo.id">
          <h2>{todo.title}</h2>
          <p>{todo.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
