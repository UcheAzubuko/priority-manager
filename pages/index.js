import { Container } from '@mui/material';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <TodoList />
    </Container>
  );
}
