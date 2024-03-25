
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import NotificationBoard from "./components/NotificationBoard";
import { NotificationData } from "./components/Notificationsinerfaces";
import { SampleData } from "./components/Sampledata";
import { AppBar, Box, Button, Container, IconButton, Paper, Toolbar } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LifeReports from "./components/LifeReports";
import AppDashboard from "./components/AppDasboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { clearSelectedApp } from "./state/SelectedAppSlice";
function App() {
  const [tabledata , setTableData] = useState<NotificationData[]>(SampleData);
  const [connection, setConnection] = useState<any>(null);
  const [appClicked, setAppClicked] = useState<boolean>(false); 
  const [runningAppName, setRunningAppName] = useState<string>('DASHBOARD');
  const [appUrl, setAppUrl] = useState<string>('');
  const dispatch = useDispatch()
  const connectToHub= async() =>{
    try {
      const conn = new HubConnectionBuilder().withUrl("http://localhost:5036/chatHub")
        .withAutomaticReconnect().configureLogging(LogLevel.Information).build();
      conn.on("ReceiveSpecificMessage", ( message:NotificationData) => {
       
        if(message.allRecipients === 'user2@user2'){
          setTableData( tabledata=> [...tabledata, message]);
          alert('message received'+ message.allRecipients);
        }
    
        
      });
      await  conn.start();
      setConnection(conn);
    } catch (err) { 
      console.log(err);
    }
  }
    
  useEffect(() => {
    connectToHub();
  },[]);

  const url = useSelector((state:RootState) => state.selectedApp.selectedAppUrl)
  const appName = useSelector((state:RootState) => state.selectedApp.selectAppName)
  

  useEffect(() => {
    if(url !== ''){
      setAppUrl(url);
      setAppClicked(true);
      setRunningAppName((_)=> appName);
    }
  },[url,appName]);   

  function showDashboardHandler(_event: React.MouseEvent<HTMLButtonElement>): void {

    dispatch(clearSelectedApp())  ;
    setRunningAppName('DASHBOARD');
    setAppClicked(false);
  }

  return (
    <Container style={{ width: '100vw', maxWidth: 'none', margin:'0',padding:'0',border:'0' }}>
      <Box display="flex" height="100vh">
        
        <Box flexGrow={1}>
          <Paper elevation={3}>
          <AppBar position="static" style={{ backgroundColor: 'black' }}>
          <Toolbar>
  <IconButton edge="start" color="inherit" aria-label="close">
    {runningAppName}
  </IconButton>
  <Box flexGrow={1} />
  {appClicked ? (
  <Button color="primary"  sx={{ color:"white" , background:"Red"}} onClick={showDashboardHandler} startIcon={<ArrowBackIcon />}>Back to DashBoard</Button>
) : null}
</Toolbar>
</AppBar>
            {/* <Box p={2}>
              {connection ? null : <div>Connection not established</div>}
            </Box> */}

          </Paper>
          <Paper elevation={3} style={{ width: '80vw',height: '100%'  }}>

           { appClicked ?
             
             <> 
             <iframe 
                width="100%" height="100%"
               src={appUrl} >
             </iframe>
             </>
              : 
               <Box p={1} >
                  <AppDashboard  />
                  <LifeReports />  
              </Box>

}
          </Paper>
        </Box>

        <Box width="20%" p={1}>
          <Paper style={{ height: '100%', overflow: 'auto' }}>
            {connection ? <NotificationBoard data={tabledata} /> : null}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default App;