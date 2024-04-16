import {
  NotificationBoardProps,
  NotificationData,
} from "./Notificationsinerfaces";
import NotificationCard from "./NotificationCard";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { useEffect, useState } from "react";
//import { Check } from "@mui/icons-material";
import MultipleSortSelect from "./MultiSortSelect";
import { ReArrangeTableData } from "./Utils/Rearragnge";

const NotificationBoard = ({ data }: NotificationBoardProps) => {
  const [tabledata, setTableData] = useState<NotificationData[]>(data);
  //const [sortBy, setSortBy] = useState<string>("");
  const [personName, setPersonName] = useState<string[]>([]);

  // const sortbyDate = (data: NotificationData[]) => {
  //   const filteredDataNotDone = data.filter(
  //     (item) => item.messageOwnerStatus === "NOTDONE"
  //   );
  //   const filteredDataDone = data.filter(
  //     (item) => item.messageOwnerStatus === "DONE"
  //   );

  //   const sorteddataNotDone = filteredDataNotDone.sort((a, b) => {
  //     return new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime();
  //   });
  //   const sorteddataDone = filteredDataDone.sort((a, b) => {
  //     return new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime();
  //   });
  //   const combinedData = sorteddataNotDone.concat(sorteddataDone);
  //   setTableData((_) => combinedData);
  // };

  // const sortbyOwner = (data: NotificationData[]) => {
  //   const temp = [...data];
  //   const sorteddata = temp.sort((a, b) => {
  //     return a.mainRecipient.localeCompare(b.mainRecipient);
  //   });
  //   setTableData((_) => sorteddata);
  //   alert("Data sorted by owner");
  // };

  // const sortbyStatus = (data: NotificationData[]) => {
  //   const filteredDataNotDone = data.filter(
  //     (item) => item.messageOwnerStatus === "NOTDONE"
  //   );
  //   const filteredDataDone = data.filter(
  //     (item) => item.messageOwnerStatus === "DONE"
  //   );

  //   const sorteddata = filteredDataNotDone.sort((a, b) => {
  //     return a.messageStatus.localeCompare(b.messageStatus);
  //   });
  //   const combinedData = sorteddata.concat(filteredDataDone);
  //   // const sorteddata = temp.sort((a, b) => {
  //   //   return a.messageStatus.localeCompare(b.messageStatus);
  //   // });

  //   setTableData((_) => combinedData);
  //   alert("Data sorted by status");
  // };

  useEffect(() => {
    // if (sortBy === "date") {
    //   sortbyDate(data);
    // } else if (sortBy === "owner") {
    //   sortbyOwner(data);
    // } else if (sortBy === "status") {
    //   sortbyStatus(data);
    // }
    const newdata = ReArrangeTableData(data, personName);
    setTableData((_) => newdata);
  }, [personName,data]);

  return (
    <>
       <Box display="flex" justifyContent="center" alignItems="center" width={"100%"}>
      <MultipleSortSelect
        personName={personName}
        setPersonName={setPersonName}
   
      />
      </Box>
      {/* <Box display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="outlined primary button group"
          fullWidth
        >
          <Button onClick={() => setSortBy("date")}>
            {sortBy === "date" && <Check color="success" />} Sort by Date
          </Button>
          <Button onClick={() => setSortBy("owner")}>
            {sortBy === "owner" && <Check color="success" />} Sort by Owner
          </Button>
          <Button onClick={() => setSortBy("status")}>
            {sortBy === "status" && <Check color="success" />} Sort by Status
          </Button>
        </ButtonGroup>
      </Box> */}
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
    </>
  );
};

export default NotificationBoard;
