import { Collapse, CardContent, Divider, Chip, Typography, CardActions, IconButton, Tooltip } from '@mui/material';
import ViewIcon from "@mui/icons-material/Visibility";

import DoneIcon from '@mui/icons-material/Done';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReplyIcon from '@mui/icons-material/Reply';
import { NotificationCardCollapseProps } from './NotificationCardProps';

import SubscribeDialog from './SubscribeDialog';
import { useState } from 'react';


const NotificationCardCollapse= ({ expanded, notification }:NotificationCardCollapseProps) => {
    function viewIconOnClickhandler(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        alert("View Icon Clicked");
    }
    function doneIconOnClickhandler(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        alert("done Icon Clicked- If you are the owner of the task, you can mark it as done. ,");
    }
    function archiveIconOnClickhandler(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        alert("arvive Icon Clicked");
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
     
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    function replyIconOnClickhandler(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
     
       handleClickOpen();
    }
    const ownerStatus ="TARGET OWNER : "+ notification.messageOwnerStatus;
  return (
   
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {notification.messageBody}

        <Divider>
          <Chip label={ownerStatus} size="small" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "underline" }}
          >
            {notification.mainRecipient}
          </Typography>
        </Divider>
      </CardContent>
      <CardActions disableSpacing>
      {/* <Tooltip title="Viewed">
          <IconButton color="primary" onClick={ viewIconOnClickhandler}>
          <ViewIcon />
        </IconButton>
        </Tooltip> */}
        {notification.messageOwner && (
  <Tooltip title="Done- Task Completed">
    <IconButton color="secondary" onClick={doneIconOnClickhandler}>
      <DoneIcon />
    </IconButton>
  </Tooltip>
)}
        <Tooltip title="Reply to sender">
        <IconButton color="default" onClick={ replyIconOnClickhandler}>
          <ReplyIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Archive Notification">
        <IconButton color="default" onClick={ archiveIconOnClickhandler}>
          <ArchiveIcon />
        </IconButton>
        </Tooltip>
      </CardActions>
      <SubscribeDialog open={open} handleClose={handleClose}  notification= {notification} />  
    </Collapse>
  );
}

export default NotificationCardCollapse;