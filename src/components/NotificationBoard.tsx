//import { Card, CardContent, Typography, IconButton } from '@mui/material';
//import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { NotificationBoardProps } from './Notificationsinerfaces';
import NotificationCard from './NotificationCard';



const NotificationBoard = ({data}: NotificationBoardProps) => {


  return (
    <div 
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
    {data.map((notification,index) => (
      <NotificationCard index={index} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationBoard;