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
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LifeReports from "./components/LifeReports";
import AppDashboard from "./components/AppDasboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { clearSelectedApp } from "./state/SelectedAppSlice";
import { setHubConnection } from "./state/HubConnectionSlice";
import NotificationComponent from "./components/NotificationComponent";
import logo from "./assets/images/NewLogoWithoutWhiteBgIcon2.png";
import { Fixedvalues } from "./components/Constants/Fixedvalues";
//import images from "../src/assets";
function App() {
  const [tabledata, setTableData] = useState<NotificationData[]>(SampleData);
  // we will pull data from the server instead of sample data
  //const [tabledata, setTableData] = useState<NotificationData[]>([]);
  const [connection, setConnection] = useState<HubConnection>();
  const [appClicked, setAppClicked] = useState<boolean>(false);
  const [runningAppName, setRunningAppName] = useState<string>(Fixedvalues.DASHBOARD_NAME);
  const appUser = "softwareeng@massload.com";
  // this should be the email of the login user which should be retrieved from the token/store
  const [appUrl, setAppUrl] = useState<string>("");

  const dispatch = useDispatch();
  const connectToHub = async () => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5036/chatHub")
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      conn.on("ReceiveSpecificMessage", (message: NotificationData) => {
        //alert(message.allRecipients + ' ' + appUser + ' ' + message.messageVisible + ' ' );

        if (
          message.allRecipients === appUser &&
          message.messageVisible === true
        ) {
          // the server should not even send the message if the user is not going to be visible
          // check also if  you can use send to group so that you wont have to filter the message here
          setTableData((tabledata) => [...tabledata, message]);
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

  const url = useSelector(
    (state: RootState) => state.selectedApp.selectedAppUrl
  );
  const appName = useSelector(
    (state: RootState) => state.selectedApp.selectAppName
  );

  useEffect(() => {
    if (url !== "") {
      setAppUrl(url);
      setAppClicked(true);
      setRunningAppName((_) => appName);
    }
  }, [url, appName]);

  function showDashboardHandler(
    _event: React.MouseEvent<HTMLButtonElement>
  ): void {
    dispatch(clearSelectedApp());
    setRunningAppName(Fixedvalues.DASHBOARD_NAME);
    setAppClicked(false);
  }

  return (
    <Container disableGutters maxWidth={false}>
      <Grid item xs={12} md={8} sx={{ margin: "0", padding: 0, border: 0 }}>
      
        <AppBar position="static" sx={{ backgroundColor: "black"}}>
          
          <Toolbar   disableGutters   sx={{ paddingRight:"50px"}}>
            
            <img
              src={logo}
              alt="Company Logo"
              width="70px" height="100%"
              
              style={{  paddingRight: "20px",
              borderRadius: "50%",
              objectFit: "cover",}}
            />
            <IconButton edge="start" color="inherit" aria-label="close">
              {runningAppName}
            </IconButton>
            <Box flexGrow={1} />
            {appClicked ? (
              <Button
                color="primary"
                // sx={{ color: "white", background: "Red" }}
                onClick={showDashboardHandler}
                startIcon={<ArrowBackIcon />}
              >
                Back to DashBoard
              </Button>
            ) : null}
            <NotificationComponent
              connection={connection}
              tabledata={tabledata}
            />
          </Toolbar>
        </AppBar>
      </Grid>

      {appClicked ? (
        <>{/* <iframe width="100%" height="100%" src={appUrl}></iframe> */}</>
      ) : (
        <Box p={1}>
          <AppDashboard />
          <LifeReports />
        </Box>
      )}
    </Container>
  );
}

export default App;
