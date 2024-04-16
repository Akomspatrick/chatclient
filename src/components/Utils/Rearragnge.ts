import { SortNames } from "../Constants/Fixedvalues";
import { NotificationData } from "../Notificationsinerfaces";

interface returnedNotificationData {
  left: NotificationData[];
  right: NotificationData[];
}

function filterDataByOwnerStatus(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const result = data.reduce(
    (acc, item) => {
      if (item.messageOwnerStatus === "NOTDONE") {
        acc.right.push(item);
      } else if (item.messageOwnerStatus === "DONE") {
        acc.left.push(item);
      }
      return acc;
    },
    { left: [] as NotificationData[], right: [] as NotificationData[] }
  );

  return result;
}

function filterDataByMessageStatus(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const result = data.reduce(
    (acc, item) => {
      if (item.messageStatus === "NOTVIEWED") {
        acc.right.push(item);
      } else if (item.messageStatus === "VIEWED") {
        acc.left.push(item);
      }
      return acc;
    },
    { left: [] as NotificationData[], right: [] as NotificationData[] }
  );

  return result;
}
function SortByOwner(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const result = data.reduce(
    (acc, item) => {
      if (item.mainRecipient === owner) {
        acc.right.push(item);
      } else {
        acc.left.push(item);
      }
      return acc;
    },
    { left: [] as NotificationData[], right: [] as NotificationData[] }
  );

  result.left.sort((a, b) => a.mainRecipient.localeCompare(b.mainRecipient));

  return result;
}
function SortBySentDate(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const temp = [...data];
  const sorted = temp.sort((a, b) => {
    return new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime();
  });

  return { left: [], right: sorted };
}

const sortingFunctions: Record<string, sortingFunction> = {
  [SortNames.SentDate]: SortBySentDate,
  [SortNames.Owner_Message]: SortByOwner,
  [SortNames.Notification_Status]: filterDataByMessageStatus,
  [SortNames.Notification_Stage]: filterDataByOwnerStatus,
};

const getfunction = (sortBy: string): sortingFunction | undefined => {
  return sortingFunctions[sortBy];
};

export function ReArrangeTableData(
  data: NotificationData[],
  sortBy: string[],
  userName = "softwareeng@massload.com"
): NotificationData[] {
  if (sortBy.length === 0) {
    return data;
  }

  const sortFunction = getfunction(sortBy[0]);
  if (!sortFunction) {
    return data;
  }

  const { left, right } = RearrangeData2(sortFunction, data, userName);

  return [
    ...ReArrangeTableData(right, sortBy.slice(1), userName),
    ...ReArrangeTableData(left, sortBy.slice(1), userName),
  ];
}

interface sortingFunction {
  (data: NotificationData[], owner?: string): returnedNotificationData;
}

function RearrangeData2(
  thefunction: sortingFunction | undefined,
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  if (thefunction) return thefunction(data, owner);
  return { left: [], right: [] };
}
