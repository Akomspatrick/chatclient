import { CardHeader, Avatar, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';
import FlashAutoSharpIcon from '@mui/icons-material/FlashAuto';
import InfoIcon from '@mui/icons-material/Info';
import { NotificationCardProps } from './NotificationCardProps';
import { returndate } from './Utils/Utils';



const NotificationCardHeader = ({ index, notification }:NotificationCardProps) => {
  
    const iconColor =
    notification.messageStatus === "NEW"
      ? "error"
      : notification.messageStatus === "VIEWED"
      ? "success"
      : "disabled";


    return (
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: red[500], width: 24, height: 24 }}
          aria-label="recipe"
        >
          {" "}{index + 1}{" "}
        </Avatar>
      }
      action={
        <Tooltip title=  {notification.messagePriority ?"High Priority": "For Your Information Only" }>
        <IconButton aria-label="settings">
          {notification.messagePriority ? (
            <FlashAutoSharpIcon color={iconColor} />
          ) : (
            <InfoIcon color={iconColor} />
          )}
        </IconButton>
        </Tooltip>
      }
      title={
        "FROM : " +
        notification.sender +
        " TO : " +
        notification.mainRecipient
      }
      subheader={"TIME : " + returndate(notification.dateSent)}
    />
  );
}

export default NotificationCardHeader;