import { CardHeader, Avatar, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';
import FlashAutoSharpIcon from '@mui/icons-material/FlashAuto';
import InfoIcon from '@mui/icons-material/Info';
import { NotificationCardProps } from './NotificationCardProps';
import { getIconColor, returndate } from './Utils/Utils';



const NotificationCardHeader = ({ index, notification }:NotificationCardProps) => {
  
   // const iconColor = getIconColor(notification.messageStatus);
    // notification.messageStatus === "NEW"
    //   ? "error"
    //   : notification.messageStatus === "VIEWED"
    //   ? "success"
    //   : "disabled";


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