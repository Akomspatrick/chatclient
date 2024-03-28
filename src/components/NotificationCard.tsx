import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  IconButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import NotificationCardHeader from "./NotificationCardHeader";
import { NotificationCardProps } from "./NotificationCardProps";
import NotificationCardCollapse from "./NotificationCardCollapse";

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
  const bgColor = notification.messageOwner ? notification.messageStatus==="DONE"?"Grey":"#ddc3c3" : "#b7d3b9"; 
  const handleExpandClick = () => {
    if (notification.messageStatus === "NEW" && !expanded) {
      alert("Should Call API to change the status to viewed");
     // notification.messageStatus = "VIEWED";
    }
    setExpanded(!expanded);
  };
  return (
    <Card
      key={index}
      sx={{
        maxWidth: 345,
        bgcolor:bgColor,
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
          <ExpandMoreIcon />
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
