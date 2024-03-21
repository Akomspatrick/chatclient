export interface NotificationBoardProps {
    data: NotificationData[];
}

export interface NotificationData2 {
    id: number;
    message: string;
    type: string;
}
export interface NotificationData {
    guid: string;
    messageGroupGuid: string;
    dateSent: string;
    dateViewed: string;
    dateCompleted: string;
    dateArchived: string;
    fromUser: string;
    toUser: string;
    sourceEmail: string;
    toEmail: string;
    originatingApp: string;
    messageBody: string;
    messageTitle: string;
    messageType: string;
    messageOwner: boolean;
    messageUrl: string;
    messageId: string;
    messageStatus: string;
    messagePriority: string;
    messageSubject: string;
}
