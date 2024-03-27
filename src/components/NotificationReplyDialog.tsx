

import * as React from 'react';
import Button from '@mui/material/Button';

import SubscribeDialog from './SubscribeDialog';

export default function NotificationReplyDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
     {/* <SubscribeDialog open={open} handleClose={handleClose}  />   */}
    </React.Fragment>
  );
}
