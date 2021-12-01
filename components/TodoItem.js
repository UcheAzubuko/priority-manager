import { ListItem, ListItemText } from '@mui/material';
import moment from 'moment';

const TodoItem = ({ id, title, detail, timestamp }) => {
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 2 }}
      style={{ backgroundColor: '#fafafa' }}
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format('MMMM do, yyyy')}
      />
    </ListItem>
  );
};

export default TodoItem;
