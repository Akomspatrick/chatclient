//import { Card, CardContent, Typography, IconButton } from '@mui/material';
//import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { NotificationBoardProps } from './Notificationsinerfaces';
import NotificationCard from './NotificationCard';
import { Grid } from '@mui/material';



const NotificationBoard = ({data}: NotificationBoardProps) => {


  return (
<Grid container  gap={3} margin={4} alignItems="center" justifyContent="center" justifyItems="center">
    {data.map((notification,index) => (
      <NotificationCard index={index} notification={notification} />
      ))}
 </Grid>
  );
}

export default NotificationBoard;