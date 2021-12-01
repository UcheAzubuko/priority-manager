import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'fishing', detail: 'I need to go fishing.' },
    { id: 2, title: 'baking', detail: 'I have to learn baking.' },
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          detail={todo.detail}
          timestamp={todo.timestamp}
        />
      ))}
    </div>
  );
};

export default TodoList;
