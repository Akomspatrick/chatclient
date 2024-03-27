import React, { useState } from 'react';
import { Grid, Paper, IconButton, Dialog, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationBoard from './NotificationBoard'; // import your NotificationBoard component
import { HubConnection } from '@microsoft/signalr';
import { NotificationData } from './Notificationsinerfaces';

interface NotificationComponentProps {
    connection: HubConnection;
    tabledata: NotificationData[];
    }

const NotificationComponent = ({ connection, tabledata }:NotificationComponentProps ) => {
    const [open, setOpen] = useState(false);
    const newdata = ()=>{
      let count = 0;
      for (let i = 0; i < tabledata.length; i++) {
        if (tabledata[i].messageStatus === "NEW") {
          ++count;
        }
      }
      return count;
    
    };
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <IconButton color="inherit" onClick={handleClickOpen}>
        <Badge badgeContent={newdata()} color="error">
          
    <NotificationsIcon />
  </Badge>
        </IconButton>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          {connection ? 
          (tabledata.length>0 ? <NotificationBoard data={tabledata} /> : <div>No data available</div>)
           :
            <>...NO CONNECTION FROM SERVER...</>}
        </Dialog>
      </>
    );
  };
  
  export default NotificationComponent;