import {
  NotificationBoardProps,
  NotificationData,
} from "./Notificationsinerfaces";
import NotificationCard from "./NotificationCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const NotificationBoard = ({ data }: NotificationBoardProps) => {
  const [tabledata, setTableData] = useState<NotificationData[]>(data);
  const sortbyDate = (data: NotificationData[]) => {
    const sorteddata = data.sort((a, b) => {
      return new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime();
    });
    setTableData(sorteddata);
    alert("Data sorted by date");
  };

  useEffect(() => {
    sortbyDate(data);
  }, [data]);

  return (
    <Grid
      container
      gap={3}
      margin={4}
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      {tabledata.map((notification, index) => (
        <NotificationCard index={index} notification={notification} />
      ))}
    </Grid>
  );
};

export default NotificationBoard;
