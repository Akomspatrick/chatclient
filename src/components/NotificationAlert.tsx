import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { NotificationAlertProps } from './NotificationAlertProps';



export const NotificationAlert= ({ message, severity }:NotificationAlertProps) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000}  onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

