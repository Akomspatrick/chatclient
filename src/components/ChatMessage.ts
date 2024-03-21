export interface ChatMessage {
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