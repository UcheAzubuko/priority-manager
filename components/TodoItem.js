import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { doc, deleteDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';

const TodoItem = ({ id, title, detail, timestamp }) => {
  const router = useRouter();

  const deleteTodo = async (id, e) => {
    try {
      e.stopPropagation();
      const docRef = doc(db, 'todos', id);
      await deleteDoc(docRef);
      alert(`Todo with id: ${id} is deleted successfully.`);
    } catch {
      alert('Something went wrong. Please check your network and try again.');
    }
  };

  const seeMore = (id, e) => {
    e.stopPropagation();
    router.push(`/todos/${id}`);
  };

  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 2 }}
      style={{ backgroundColor: '#fafafa' }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={(e) => seeMore(id, e)}>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format('MMMM do, yyyy')}
      />
    </ListItem>
  );
};

export default TodoItem;
