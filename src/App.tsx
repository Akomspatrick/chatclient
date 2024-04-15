import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { NotificationData } from "./components/Notificationsinerfaces";
import { SampleData } from "./components/Sampledata";

import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import LifeReports from "./components/LifeReports";
import AppDashboard from "./components/AppDasboard";
import { useDispatch } from "react-redux";
import { setHubConnection } from "./state/HubConnectionSlice";

import logo from "./assets/images/NewLogoWithoutWhiteBgIcon2.png";
import { Fixedvalues } from "./components/Constants/Fixedvalues";
import { NotificationAlert } from "./components/NotificationAlert";
import NotificationBoard from "./components/NotificationBoard";

function App() {
  //const [tabledata, setTableData] = useState<NotificationData[]>(SampleData);
  // we will pull data from the server instead of sample data
   const [tabledata, setTableData] = useState<NotificationData[]>([]);
  const [connection, setConnection] = useState<HubConnection | null>(null);

  const appUser = "softwareeng@massload.com";
  // this should be the email of the login user which should be retrieved from the token/store

  const dispatch = useDispatch();
  const connectToHub = async () => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl(Fixedvalues.HubServerConnectionUrl)
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      conn.on("ReceiveSpecificMessage", (message: NotificationData) => {
        if (
          message.allRecipients === appUser &&
          message.messageVisible === true
        ) {
          // the server should not even send the message if the user is not going to be visible
          // check also if  you can use send to group so that you wont have to filter the message here
          // setNewData(message.guid);
          setTableData((tabledata) => [...tabledata, message]);
          alert(message.messageTitle);
          <NotificationAlert
            message={message.messageTitle}
            severity="success"
          />;
          console.log(tabledata);
        }
      });
      await conn.start();
      setConnection(conn);
      dispatch(setHubConnection({ connection: conn }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    connectToHub();
  }, []);

  return (
    <Container disableGutters maxWidth={false}>
      <Grid item xs={12} md={8} sx={{ margin: "0", padding: 0, border: 0 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar disableGutters sx={{ paddingRight: "50px" }}>
            <img
              src={logo}
              alt="Company Logo"
              width="70px"
              height="100%"
              style={{
                paddingRight: "20px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <IconButton edge="start" color="inherit" aria-label="close">
              <Typography variant="h6" color="white">
                {Fixedvalues.DASHBOARD_NAME}
              </Typography>
            </IconButton>
            <Box flexGrow={1} />
            {/* <NotificationComponent
              connection={connection}
              tabledata={tabledata}
            /> */}
          </Toolbar>
        </AppBar>
      </Grid>
      <Box display="flex" height="100vh">
        <Box p={1} style={{ width: "70vw" }}>
          <AppDashboard />

          <LifeReports />
        </Box>
        <Box width="25%" p={1}>
          <Paper style={{ height: "100%", overflow: "scroll" }}>
            {
            connection ?(
              tabledata.length > 0 ? (
                <NotificationBoard data={tabledata} />
              ) : (
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="5vh"
                bgcolor="error.main"
                color="common.white"
                borderRadius={5}
              >
                <Typography variant="h6">NO NOTIFICATION DATA AVAILABLE</Typography>
              </Box>
                
              )
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="5vh"
                bgcolor="error.main"
                color="common.white"
                borderRadius={5}
              >
                <Typography variant="h6">NO CONNECTION FROM SERVER</Typography>
              </Box>
            ) 
            }


          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
