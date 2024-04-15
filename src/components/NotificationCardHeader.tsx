import { CardHeader, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import { NotificationCardProps } from './NotificationCardProps';
import {  returndate } from './Utils/Utils';



const NotificationCardHeader = ({  notification }:NotificationCardProps) => {
  
   // const iconColor = getIconColor(notification.messageStatus);
    // notification.messageStatus === "NEW"
    //   ? "error"
    //   : notification.messageStatus === "VIEWED"
    //   ? "success"
    //   : "disabled";


    return (
    <CardHeader sx={{ color: red[500] }}
      // avatar={
      //   <Avatar
      //     sx={{ bgcolor: red[500], width: 24, height: 24 }}
      //     aria-label="recipe"
      //   >
      //     {" "}{index + 1}{" "}
      //   </Avatar>
      // }

      title={
        <>
      <Typography variant="body2" color="text.primary" fontWeight="bold">
        {"FROM : " + notification.sender }
      </Typography>
      <Typography variant="body2" color="text.primary" fontWeight="bold">
        {"    TO : " + notification.mainRecipient}
      </Typography>
    </>
      }
      subheader={
        <>
        <Typography variant="body2" color="text.primary" fontWeight="bold">
        {"TIME : "+ returndate(notification.dateSent)}
      </Typography>

        </>
      }
    />
  );
}

export default NotificationCardHeader;