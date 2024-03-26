import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  IconButtonProps,
  Divider,
  Chip,
} from "@mui/material";
import { red } from "@mui/material/colors";
//import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
//import QuickreplyIcon from '@mui/icons-material/Quickreply';
import FlashAutoSharpIcon from "@mui/icons-material/FlashAutoSharp";
import ClearIcon from "@mui/icons-material/OneKOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import { NotificationData } from "./Notificationsinerfaces";
import { styled } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface NotificationCardProps {
  notification: NotificationData;
  index: number;
}

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

const returndate = (date: string) => {
  console.log(date);
  return (
    new Date(date).toLocaleDateString("en-CA") +
    " " +
    new Date(date).toLocaleTimeString("en-CA")
  );
};

const NotificationCard = ({ index, notification }: NotificationCardProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const iconColor =
    notification.messageStatus === "NEW"
      ? "error"
      : notification.messageStatus === "VIEWED"
      ? "success"
      : "disabled";
  //const bkGrounColor=  notification.messageOwner ? '#ddc3c3' :  '#b7d3b9'

  return (
    <Card
      key={index}
      sx={{
        maxWidth: 345,
        backgroundColor: notification.messageOwner ? "#ddc3c3" : "#b7d3b9",
      }}

      //   style={{color: notification.messagePriority==='High' ? 'rgba(0,0,0,0.9)' : 'rgba(231,18,18,0.87)'}}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 24, height: 24 }}
            aria-label="recipe"
          >
            {" "}
            {index + 1}{" "}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {notification.messagePriority ? (
              <FlashAutoSharpIcon color={iconColor} />
            ) : (
              <InfoIcon color={iconColor} />
            )}
          </IconButton>
        }
        title={
          "FROM : " +
          notification.sender +
          " TO : " +
          notification.mainRecipient
        }
        subheader={"TIME : " + returndate(notification.dateSent)}
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

          <Divider>
            <Chip label="TARGET OWNER" size="small" />
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
  );
};

export default NotificationCard;
