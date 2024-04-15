import { NotificationCardColorProps } from "../NotificationCardProps";
import { NotificationData } from "../Notificationsinerfaces";

export const returndate = (date: string) => {
  console.log(date);
  return (
    new Date(date).toLocaleDateString("en-CA") +
    " " +
    new Date(date).toLocaleTimeString("en-CA")
  );
};

export const getIconColor = (messageStatus: string) => {
  return messageStatus === "NEW"
    ? "error"
    : messageStatus === "VIEWED"
    ? "success"
    : "secondary";
};

export function getCArdColors(
  notification: NotificationData
): NotificationCardColorProps {
  const cardbackground = notification.messageOwnerStatus === "DONE" 
  ? "Grey" 
  : notification.messageOwner 
    ? "#ddc3c3" 
    : "#b7d3b9";

const cardBorder = notification.messageOwnerStatus === "DONE" || notification.messageStatus == "VIEWED" 
  ? "#5px" 
  : "10px solid black";

return { cardbackground, cardBorder };}


