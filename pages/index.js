import { Container } from '@mui/material';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Login from '../components/Login';

export default function Home() {
  return <Login />;
  return (
    <Container maxWidth="sm">
      <TodoForm />
      <TodoList />
    </Container>
  );
}
