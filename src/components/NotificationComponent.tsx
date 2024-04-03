import { useState } from "react";
import { IconButton, Dialog, Badge, Typography, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationBoard from "./NotificationBoard"; // import your NotificationBoard component
import { HubConnection } from "@microsoft/signalr";
import { NotificationData } from "./Notificationsinerfaces";

interface NotificationComponentProps {
  connection: HubConnection;
  tabledata: NotificationData[];
}

const NotificationComponent = ({
  connection,
  tabledata,
}: NotificationComponentProps) => {
  const [open, setOpen] = useState(false);
  const newdata = () => {
    let count = 0;
    for (let i = 0; i < tabledata.length; i++) {
      if (tabledata[i].messageStatus === "NEW") {
        ++count;
      }
    }
    return count;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <  >
      <IconButton color="inherit" onClick={handleClickOpen}>
        <Badge badgeContent={newdata()} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" >
        {connection ? (
          tabledata.length > 0 ? (
            <NotificationBoard data={tabledata} />
          ) : (
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="5vh"
            bgcolor="error.main"
            color="common.white"
            borderRadius={5}
          >
            <Typography variant="h6">NO NOTIFICATION DATA AVAILABLE</Typography>
          </Box>
            
          )
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="5vh"
            bgcolor="error.main"
            color="common.white"
            borderRadius={5}
          >
            <Typography variant="h6">NO CONNECTION FROM SERVER</Typography>
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default NotificationComponent;
