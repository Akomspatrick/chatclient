import { NotificationData } from "./Notificationsinerfaces";

export interface NotificationCardProps {
  notification: NotificationData;
  index: number;
}

export interface NotificationCardCollapseProps {
  expanded: boolean;
  notification: NotificationData; // replace 'any' with the actual type
}

export interface NotificationCardColorProps {
  cardbackground: string;
  cardBorder: string;
}
