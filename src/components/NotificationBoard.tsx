import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/OneKOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import { NotificationBoardProps } from './Notificationsinerfaces';

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
            <TableCell>Type</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((notification,index) => (
            <TableRow 
              key={index}
            //   sx={{ 
            //     backgroundColor: notification.type === 'Error' ? 'error.main' : 
            //                     notification.type === 'Warning' ? 'warning.main' : 
            //                     'success.main',
            //     color: 'background.paper',
            //   }}
            >
              <TableCell>{notification.type}</TableCell>
              <TableCell>{notification.message}</TableCell>
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