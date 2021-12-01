import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { db } from '../firebase';

const TodoForm = () => {
  const [todo, setTodo] = useState({ title: '', detail: '' });

  const addTodo = async () => {
    try {
      const collectionRef = collection(db, 'todos');
      const docRef = await addDoc(collectionRef, {
        ...todo,
        timestamp: serverTimestamp(),
      });
      setTodo({ title: '', detail: '' });
      alert(`Todo with id: ${docRef.id} has been added successfully.`);
    } catch {
      alert('Something went wrong. Please check your network and try again.');
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <Button variant="contained" sx={{ mt: 3 }} onClick={addTodo}>
        Add new todo
      </Button>
    </div>
  );
};

export default TodoForm;
