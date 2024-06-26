export interface NotificationBoardProps {
  data: NotificationData[];
}

// export interface NotificationData2 {
//     id: number;
//     message: string;
//     type: string;
// }
export interface NotificationData {
  guid: string;
  messageGroupGuid: string;
  dateSent: string;
  dateViewed: string;
  dateCompleted: string;
  dateArchived: string;
  sender: string; //FromUser sender
  mainRecipient: string; //ToUser
  allRecipients: string; // this is the email of people from the group
  originatingApp: string;
  messageBody: string;
  messageTitle: string;
  // messageType: string;
  messageOwner: boolean;
  // messageUrl: string;
  messageId: string;
  roomName: string;
  messageOwnerStatus: string; //"NOTDONE";//DONE,
  messageStatus: string; //"NOTVIEW";//VIEWED,
  messageVisible: boolean;
  // messagePriority: boolean;
  //this is to show or hide the message
  // messageSubject: string;
}
// if you are the owner of the message,
// the message owner statue will always be updated whenever you update message status
