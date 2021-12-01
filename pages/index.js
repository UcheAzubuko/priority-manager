import { Container } from '@mui/material';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <TodoForm />
      <TodoList />
    </Container>
  );
}
