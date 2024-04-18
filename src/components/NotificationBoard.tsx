import {
  NotificationBoardProps,
  NotificationData,
} from "./Notificationsinerfaces";
import NotificationCard from "./NotificationCard";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import MultipleSortSelect from "./MultiSortSelect";
import { ReArrangeTableData } from "./Utils/Rearragnge";

const NotificationBoard = ({ data }: NotificationBoardProps) => {
  const [tabledata, setTableData] = useState<NotificationData[]>(data);
  const [personName, setPersonName] = useState<string[]>([]);


  useEffect(() => {

    const newdata = ReArrangeTableData(data, personName);
    setTableData((_) => newdata);
  }, [personName,data]);

  return (
    <Box

    justifyContent="center" 
    alignItems="center" 
    padding="1rem" 
    bgcolor="#f5f5f5">
       <Box display="flex" justifyContent="center" alignItems="center" width={"100%"}>
      <MultipleSortSelect
        personName={personName}
        setPersonName={setPersonName}
   
      />
      </Box>
 
      <Grid
        container
        gap={3}
        margin={4}
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
      
      >
        {tabledata.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))}
      </Grid>
    </Box>
  );
};

export default NotificationBoard;
