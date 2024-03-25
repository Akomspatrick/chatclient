//import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import InfoIcon from '@mui/icons-material/Info';
import QuickreplyIcon from '@mui/icons-material/Quickreply';

import ClearIcon from '@mui/icons-material/OneKOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import { NotificationBoardProps } from './Notificationsinerfaces';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const returndate = (date: string) => {
  console.log(date);
  return new Date(date).toLocaleDateString('en-CA')+ ' '+ new Date(date).toLocaleTimeString('en-CA');
}

const NotificationBoard = ({data}: NotificationBoardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <Card 
    
    key={index}
    sx={{ maxWidth: 345,
      backgroundColor: notification.messageOwner ? '#ddc3c3' :  '#b7d3b9',
    }}
 
    style={{color: notification.messagePriority==='High' ? 'rgba(0,0,0,0.9)' : 'rgba(231,18,18,0.87)'}}
    //style={{color: notification.messagePriority==='High' ? 'rgba(231,18,18,0.87)' : 'rgba(0,0,0,0.9)'}}
    >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] ,width: 24, height: 24 
          
        }} aria-label="recipe">
          {index+1}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          {
          notification.messagePriority==='High' ? 
          <QuickreplyIcon color='warning' /> : <InfoIcon color='primary' />
          }
        

        </IconButton>
      }

      title={"FROM : "+ notification.sender + " TO : "+ notification.mainRecipient }
      subheader=  {"TIME : "+ returndate(notification.dateSent)}
    />

          <CardContent>
        <Typography variant="body2" color="text.secondary">
        {notification.messageTitle}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
    

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {notification.messageBody}
        </CardContent>
        <CardActions disableSpacing>
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

      </CardActions>

      </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default NotificationBoard;