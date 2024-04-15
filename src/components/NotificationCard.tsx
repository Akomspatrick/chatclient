import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  IconButtonProps,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import NotificationCardHeader from "./NotificationCardHeader";
import { NotificationCardProps } from "./NotificationCardProps";
import NotificationCardCollapse from "./NotificationCardCollapse";
import { NotificationCardColorProps } from "./NotificationCardProps";
import { getCArdColors } from "./Utils/Utils";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const NotificationCard = ({ index, notification }: NotificationCardProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const carddesign= getCArdColors(notification);  
  //const bgColor = notification.messageStatus ==="DONE"?"Grey": notification.messageOwner?"#ddc3c3" : "#b7d3b9"; 
  //const cardBorder = notification.messageStatus==="VIEWED" ?  "#5px":"10px solid black"; 
  // if (notification.messageStatus==="DONE"){
  //   bgColor = "Grey";
  //   cardBorder = "#5px";

  // } else if (notification.messageOwner){
  //   bgColor = "#ddc3c3";
  //   cardBorder = "10px solid black";
  // } else {
  //   bgColor = "#b7d3b9";
  //   cardBorder = "#5px";
  // }


  // const bgColor = notification.messageStatus === "DONE" ? "Grey" : (notification.messageOwner ? "#ddc3c3" : "#b7d3b9");
  // const cardBorder = notification.messageStatus === "DONE" || !notification.messageOwner ? "#5px" : "10px solid black";

  //const bgColor = notification.messageStatus ==="DONE"?"Grey":"#ddc3c3" ;

  const handleExpandClick = () => {
    if (notification.messageStatus === "NEW" && !expanded) {
      alert("Should Call API to change the status to viewed");
    
    }
    setExpanded(!expanded);
  };


  return (
    <Card
      key={index}
      sx={{
        maxWidth: 345,
        bgcolor:carddesign.cardbackground,
        border: carddesign.cardBorder,
        borderRadius: 10,
      }}
    >
      <NotificationCardHeader index={index} notification={notification} />

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
            <Tooltip title="Click to View Details ">
          <ExpandMoreIcon />
        </Tooltip >
        </ExpandMore>
        
      </CardActions>
      <NotificationCardCollapse
        expanded={expanded}
        notification={notification}
      />
    </Card>
  );
};

export default NotificationCard;
