import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { doc, deleteDoc } from '@firebase/firestore';
import { db } from '../firebase';

const TodoItem = ({ id, title, detail, timestamp }) => {
  const deleteTodo = async (id, e) => {
    // try {
      e.stopPropagation();
      const docRef = doc(db, 'todos', id);
      await deleteDoc(docRef);
      alert(`Todo with id: ${id} is deleted successfully.`);
    // } catch {
      // alert('Something went wrong. Please check your network and try again.');
    // }
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
          <IconButton>
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
