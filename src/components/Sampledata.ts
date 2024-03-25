import { NotificationData } from "./Notificationsinerfaces";

export const SampleData: NotificationData[] = [
    {
      "guid": "1234-5678-9101",
      "messageGroupGuid": "abcd-efgh-ijkl",
      "dateSent": "2022-01-01T00:00:00Z",
      "dateViewed": "2022-01-02T00:00:00Z",
      "dateCompleted": "2022-01-03T00:00:00Z",
      "dateArchived": "2022-01-04T00:00:00Z",
      "fromUser": "John Doe@Massload.com",
      "toUser": "Jane Doe@Massload.com",
  

      "originatingApp": "Sample App",
      "messageBody": "This is a sample message body.",
      "messageTitle": "Sample Message Title",
      "messageType": "info",
      "messageOwner": false,
      "messageUrl": "http://example.com/sample-message",
      "messageId": "msg1234",
      "messageStatus": "sent",
      "messagePriority": "High",
    //  "messageSubject": "Sample Message Subject"
    },

    {
      "guid": "1234-5678-9103",
      "messageGroupGuid": "abcd-efgh-ijkl",
      "dateSent": "2024-03-25T18:38:39.5557185Z",
      "dateViewed": "2022-01-10T00:00:00Z",
      "dateCompleted": "2022-01-11T00:00:00Z",
      "dateArchived": "2022-01-12T00:00:00Z",
      "fromUser": "Charlie@Massload.com",
      "toUser": "David@Massload.com",

      "originatingApp": "Yet Another App",
      "messageBody": "This is yet another sample message body.",
      "messageTitle": "Yet Another Sample Message Title",
      "messageType": "error",
      "messageOwner": true,
      "messageUrl": "http://example.com/yet-another-sample-message",
      "messageId": "msg1236",
      "messageStatus": "read",
      "messagePriority": "low",
     // "messageSubject": "Yet Another Sample Message Subject"
    }
  ];