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
  const filteredDataNotDone = data.filter(
    (item) => item.messageOwnerStatus === "NOTDONE"
  );
  const filteredDataDone = data.filter(
    (item) => item.messageOwnerStatus === "DONE"
  );

  return { left: filteredDataDone, right: filteredDataNotDone };
}

function filterDataByMessageStatus(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const filteredDataNotViewed = data.filter(
    (item) => item.messageStatus === "NOTVIEWED"
  );
  const filteredDataViewed = data.filter(
    (item) => item.messageStatus === "VIEWED"
  );

  return { left: filteredDataViewed, right: filteredDataNotViewed };
}

function SortByOwner(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  // const temp = [...data];
  // return temp.sort((a, b) => {
  //   return a.mainRecipient.localeCompare(b.mainRecipient);
  // });
  const Ownerslist = data.filter((item) => item.mainRecipient === owner);
  const Otherslist = data.filter((item) => item.mainRecipient != owner);
  const sortedothers = Otherslist.sort((a, b) => {
    return a.mainRecipient.localeCompare(b.mainRecipient);
  });

  return { left: sortedothers, right: Ownerslist };
}

function SortBySentDate(
  data: NotificationData[],
  owner?: string
): returnedNotificationData {
  const temp = [...data];
  const sorted = temp.sort((a, b) => {
    return new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime();
  });
  console.log("start-SortBySentDate");
  console.log(sorted);
  console.log("End-SortBySentDate");
  return { left: [], right: sorted };
}
const getfunction = (sortBy: string): sortingFunction | undefined => {
  if (sortBy === SortNames.SentDate) {
    return SortBySentDate;
  } else if (sortBy === SortNames.Owner_Message) {
    return SortByOwner;
  } else if (sortBy === SortNames.Notification_Status) {
    return filterDataByMessageStatus;
  } else if (sortBy === SortNames.Notification_Stage) {
    return filterDataByOwnerStatus;
  }
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
// export function ReArrangeTableData(
//   data: NotificationData[],
//   sortBy: string[],
//   userName = "softwareeng@massload.com"
// ): NotificationData[] {
//   const tempdata = [...data];
//   if (sortBy.length === 0) {
//     return tempdata;
//   }
//   let combinedData: NotificationData[] = [];
//   let data1: returnedNotificationData = { left: [], right: [] };
//   let data21: returnedNotificationData = { left: [], right: [] };
//   let data22: returnedNotificationData = { left: [], right: [] };
//   let data31: returnedNotificationData = { left: [], right: [] };
//   let data32: returnedNotificationData = { left: [], right: [] };
//   let data33: returnedNotificationData = { left: [], right: [] };
//   let data34: returnedNotificationData = { left: [], right: [] };
//   let data41: returnedNotificationData = { left: [], right: [] };
//   let data42: returnedNotificationData = { left: [], right: [] };
//   let data43: returnedNotificationData = { left: [], right: [] };
//   let data44: returnedNotificationData = { left: [], right: [] };
//   let data45: returnedNotificationData = { left: [], right: [] };
//   let data46: returnedNotificationData = { left: [], right: [] };
//   let data47: returnedNotificationData = { left: [], right: [] };
//   let data48: returnedNotificationData = { left: [], right: [] };

//   for (let i = 0; i < sortBy.length; i++) {
//     const returnedfunction = getfunction(sortBy[i]);
//     if (i === 0 && returnedfunction) {
//       data1 = RearrangeData2(returnedfunction, tempdata, userName);
//       console.log("data1" + sortBy[i]);
//       console.log(data1);
//     }
//     if (i === 1 && returnedfunction) {
//       //alert("i=1");
//       data21 = RearrangeData2(returnedfunction, data1.left, userName);
//       data22 = RearrangeData2(returnedfunction, data1.right, userName);
//       console.log("data21)+sortBy[i]");
//       console.log(data21);
//       console.log(data22);
//     }
//     if (i === 2 && returnedfunction) {
//       data31 = RearrangeData2(returnedfunction, data21.left, userName);
//       data32 = RearrangeData2(returnedfunction, data21.right, userName);

//       data33 = RearrangeData2(returnedfunction, data22.left, userName);
//       data34 = RearrangeData2(returnedfunction, data22.right, userName);
//       console.log("data31" + sortBy[i]);
//       console.log(data31);
//       console.log(data32);
//       console.log(data33);
//       console.log(data34);
//     }
//     if (i === 3 && returnedfunction) {
//       data41 = RearrangeData2(returnedfunction, data31.left, userName);
//       data42 = RearrangeData2(returnedfunction, data31.right, userName);

//       data43 = RearrangeData2(returnedfunction, data32.left, userName);
//       data44 = RearrangeData2(returnedfunction, data32.right, userName);

//       data45 = RearrangeData2(returnedfunction, data33.left, userName);
//       data46 = RearrangeData2(returnedfunction, data33.right, userName);

//       data47 = RearrangeData2(returnedfunction, data34.left, userName);
//       data48 = RearrangeData2(returnedfunction, data34.right, userName);
//       console.log("data41" + sortBy[i]);
//       console.log(data41);
//       console.log(data42);
//       console.log(data43);
//       console.log(data44);
//       console.log(data45);
//       console.log(data46);
//       console.log(data47);
//       console.log(data48);
//     }
//     // if (sortBy.length === 1) {
//     //       combinedData = data1.left.concat(data1.right);
//     //     }
//     //     if (sortBy.length === 2) {
//     //       combinedData = data21.left.concat(data21.right).concat(data22.left).concat(data22.right);
//     //     }
//     //     if (sortBy.length === 3) {
//     //       combinedData = data31.left.concat(data31.right).concat(data32.left).concat(data32.right).concat(data33.left).concat(data33.right).concat(data34.left).concat(data34.right);
//     //     }
//     //     else if (sortBy.length === 4) {
//     //     combinedData = data41.left
//     //       .concat(data41.right)
//     //       .concat(data42.left)
//     //       .concat(data42.right)
//     //       .concat(data43.left)
//     //       .concat(data43.right)
//     //       .concat(data44.left)
//     //       .concat(data44.right)
//     //       .concat(data45.left)
//     //       .concat(data45.right)
//     //       .concat(data46.left)
//     //       .concat(data46.right)
//     //       .concat(data47.left)
//     //       .concat(data47.right)
//     //       .concat(data48.left)
//     //       .concat(data48.right);

//     //     }
//   }
//   if (sortBy.length === 1) {
//     combinedData = data1.right.concat(data1.left);
//   }
//   if (sortBy.length === 2) {
//     // combinedData = data21.right
//     //   .concat(data21.left)
//     //   .concat(data22.right)
//     //   .concat(data22.left);
//     combinedData = data22.right
//       .concat(data22.left)
//       .concat(data21.right)
//       .concat(data21.left);
//   }
//   if (sortBy.length === 3) {
//     // combinedData = data31.right
//     //   .concat(data31.left)
//     //   .concat(data32.right)
//     //   .concat(data32.left)
//     //   .concat(data33.right)
//     //   .concat(data33.left)
//     //   .concat(data34.right)
//     //   .concat(data34.left);
//     combinedData = data34.right
//       .concat(data34.left)
//       .concat(data33.right)
//       .concat(data33.left)
//       .concat(data32.right)
//       .concat(data32.left)
//       .concat(data31.right)
//       .concat(data31.left);
//   } else if (sortBy.length === 4) {
//     // combinedData = data41.right
//     //   .concat(data41.left)
//     //   .concat(data42.right)
//     //   .concat(data42.left)
//     //   .concat(data43.right)
//     //   .concat(data43.left)
//     //   .concat(data44.right)
//     //   .concat(data44.left)
//     //   .concat(data45.right)
//     //   .concat(data45.left)
//     //   .concat(data46.right)
//     //   .concat(data46.left)
//     //   .concat(data47.right)
//     //   .concat(data47.left)
//     //   .concat(data48.right)
//     //   .concat(data48.left);
//     combinedData = data48.right
//       .concat(data48.left)
//       .concat(data47.right)
//       .concat(data47.left)
//       .concat(data46.right)
//       .concat(data46.left)
//       .concat(data45.right)
//       .concat(data45.left)
//       .concat(data44.right)
//       .concat(data44.left)
//       .concat(data43.right)
//       .concat(data43.left)
//       .concat(data42.right)
//       .concat(data42.left)
//       .concat(data41.right)
//       .concat(data41.left);
//   }
//   //   const combinedData = data41.left.concat(data42.left).concat(data43.left).concat(data44.left).concat(data45.left).concat(data46.left).concat(data47.left).concat(data48.left)
//   //   .concat(data41.right).concat(data42.right).concat(data43.right).concat(data44.right).concat(data45.right).concat(data46.right).concat(data47.right).concat(data48.right);

//   // if (sortBy[i] === "date") {
//   //   return SortBySentDate(data).right;
//   // } else if (sortBy[i] === "owner") {
//   //   return SortByOwner(data).right;
//   // } else if (sortBy[i] === "status") {
//   //   return filterDataByMessageStatus(data).right;
//   // } else if (sortBy[i] === "ownerstatus") {
//   //   return filterDataByOwnerStatus(data).right;
//   // }
//   // if (sortBy === "date") {
//   //   return SortBySentDate(data);
//   // } else if (sortBy === "owner") {
//   //   return SortByOwner(data,owner);
//   // } else if (sortBy === "status") {
//   //   return filterDataByMessageStatus(data);
//   // } else if (sortBy === "ownerstatus") {
//   //   return filterDataByOwnerStatus(data);
//   // }

//   return combinedData;
// }
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
