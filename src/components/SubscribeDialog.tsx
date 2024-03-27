import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { NotificationData } from "./Notificationsinerfaces";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
//import { useState } from 'react';

interface SubscribeDialogProps {
  open: boolean;
  handleClose: () => void;
  notification: NotificationData;
}

const SubscribeDialog = ({
  open,
  handleClose,
  notification,
}: SubscribeDialogProps) => {
  const connection = useSelector(
    (state: RootState) => state.hubconnection.connection
  );
  //const [message, setMessage] = useState<string>("");
  // function SendMessageBackToSignalRhandler(event: React.FormEvent<HTMLFormElement>): void {
  //     // Implement your logic here
  //     event.preventDefault();
  //     // const target = event.currentTarget;

  //     // console.log(target);
  //     // const formData = new FormData(event.currentTarget);
  //     // const formJson = Object.fromEntries((formData as any).entries());
  //     // const email = formJson.email;
  //     // console.log(email);

  //     if (connection)
  //     {
  //         console.log(connection.state);
  //         console.log("Connection available and message is "+ message);
  //         notification.messageBody = message;
  //         notification.sender = notification.allRecipients;
  //         notification.messageOwner= true;
  //         console.log(notification);
  //     connection?.invoke("ReplyMessageToRoomParticipants",notification);
  //     } else {
  //         alert("No connection available");
  //         console.log("No connection available");
  //     }
  // }
  function SendMessageBackToSignal(message: string): void {
    // Implement your logic here

    // const target = event.currentTarget;

    // console.log(target);
    // const formData = new FormData(event.currentTarget);
    // const formJson = Object.fromEntries((formData as any).entries());
    // const email = formJson.email;
    // console.log(email);

    if (connection) {
      console.log(connection.state);
      console.log("Connection available and message is " + message);
      notification.messageBody = message;
      notification.messageTitle = "RE: " + notification.messageTitle;
      notification.mainRecipient = notification.sender;
      notification.sender = notification.allRecipients;
      notification.messageOwner = true;
      console.log(notification);
      connection?.invoke("ReplyMessageToRoomParticipants", notification);
    } else {
      alert("No connection available");
      console.log("No connection available");
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          SendMessageBackToSignal(email);
          //setMessage(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Reply to a Notification..</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Replying to "{notification.messageTitle}" from {notification.sender}
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Enter your message here"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Send</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubscribeDialog;
