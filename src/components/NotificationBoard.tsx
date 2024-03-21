import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/OneKOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import { NotificationBoardProps } from './Notificationsinerfaces';

const returndate = (date: string) => {
  console.log(date);
  return new Date(date).toLocaleDateString('en-CA')+ ' '+ new Date(date).toLocaleTimeString('en-CA');
}


const NotificationBoard = ({data}: NotificationBoardProps) => {
  return (
    <TableContainer 
      component={Paper}
      sx={{
        width: '30%',
        margin: '0 auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Sno</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((notification,index) => (
            <TableRow 
              key={index}
              sx={{ 
                backgroundcolor: notification.messageOwner ? 'error.main' :  'success.main',
                
              }}
              style={{color: notification.messageOwner ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)'}}
            >
              <TableCell>{index+1}</TableCell>
              <TableCell
              
               >{returndate(notification.dateSent)}</TableCell>
              <TableCell  key={index}
               sx={{ 
                color: notification.messageOwner ? 'error.main' :  'success.main',
                 
               }}
               >{notification.messageTitle}</TableCell>
              <TableCell
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <IconButton color="primary">
                  <ViewIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="default">
                  <ClearIcon />
                </IconButton>
                <IconButton color="default">
                  <ArchiveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NotificationBoard;