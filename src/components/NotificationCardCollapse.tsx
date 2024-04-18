import {
  Collapse,
  CardContent,
  Divider,
  Chip,
  Typography,
  CardActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ArchiveIcon from "@mui/icons-material/Archive";

import { NotificationCardCollapseProps } from "./NotificationCardProps";



const NotificationCardCollapse = ({
  expanded,
  notification,
}: NotificationCardCollapseProps) => {
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


  return (
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
      </CardActions>

    </Collapse>
  );
};

export default NotificationCardCollapse;
