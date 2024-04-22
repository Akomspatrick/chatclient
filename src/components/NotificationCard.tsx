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
import { getCArdColors } from "./Utils/Utils";
import DoneIcon from "@mui/icons-material/Done";
import ArchiveIcon from "@mui/icons-material/Archive";

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

  function doneIconOnClickhandler(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    alert(
      "done Icon Clicked- If you are the owner of the task, you can mark it as done. ,"
    );
  }
  function archiveIconOnClickhandler(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    alert("arvive Icon Clicked");
  }
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
      <NotificationCardHeader key={index} notification={notification} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {notification.messageTitle}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      {notification.messageOwner && (
          <Tooltip title="Done- Task Completed">
            <IconButton color="primary" onClick={doneIconOnClickhandler}>
              <DoneIcon />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title="Archive Notification">
          <IconButton color="secondary" onClick={archiveIconOnClickhandler}>
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
        
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
