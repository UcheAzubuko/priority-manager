import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Setting the variable for the list of todos
  const [todos, setTodos] = useState([]);
  // Using useEffect to read data from the todos collection in Firestore
  useEffect(() => {
    // Create a reference to the todos collection
    const collectionRef = collection(db, 'todos');

    // Using a query to get the collection and order by the timestamp
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    // Using onSnapshot() to listen to changes in Firestore, the set the todos list (variable) to the documents in the todos collections, making sure to grab each todo's data, id and timestamp which we have converted to the format that JavaScript understands.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          detail={todo.detail}
          timestamp={todo.timestamp}
        />
      ))}
    </div>
  );
};

export default TodoList;
