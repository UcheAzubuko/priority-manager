import { Avatar, Container, IconButton, Typography } from '@mui/material';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Box } from '@mui/system';
import { useAuth } from '../AuthProvider';
import { auth } from '../firebase';

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        mt={3}
      >
        <IconButton onClick={() => auth.signOut()}>
          <Avatar src={currentUser.photoURL} />
        </IconButton>
        <Typography variant="h6">{currentUser.displayName}</Typography>
      </Box>
      <TodoForm />
      <TodoList />
    </Container>
  );
}
