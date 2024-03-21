import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
// import ChatScreen from "./components/ChatScreen";
// import React from "react";
// import ChatRoom from "./components/ChatRoom";
// import { ChatRoomProps, msguser } from "./components/ChatRoomProps";
// //

import { useEffect, useState } from "react";
import NotificationBoard from "./components/NotificationBoard";
import { NotificationData } from "./components/Notificationsinerfaces";


// function App() {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [connection, setConnection] = React.useState<any>(null);

//   const ss: msguser = { msg: "INIT", username: "UNKNOWN" };
//   const s: ChatRoomProps = { message: [ss] };
//   const [messages, setMessages] = React.useState<ChatRoomProps>(s);
//   const joinRoom = async (userName: string, chatRoom: string) => {
//     try {
//       /*
//       To use this the server must be configured to accept JWT tokens.
//       the token can be obtained from the server and passed to the client.
//       therefore the hub must have authorize attribute.
//    const token = "your_jwt_token_here";

// const conn = new HubConnectionBuilder()
//   .withUrl('http://localhost:5036/chatHub', {
//     accessTokenFactory: () => token,
//   })
//   .withAutomaticReconnect()
//   .configureLogging(LogLevel.Information)
//   .build();
//    */
//       const conn = new HubConnectionBuilder()
//         .withUrl("http://localhost:5036/chatHub")
//         .withAutomaticReconnect()
//         .withAutomaticReconnect()
//         .configureLogging(LogLevel.Information)
//         .build();
//       conn.on("JoinChatGroupRoom", (user, message) => {
//         console.log(`${user}: ${message}`);
//       });
//       conn.on("ReceiveSpecificMessage", (user, message) => {
//         // setMessages(messages => [...messages, `${user}: ${message}`]);
//         setMessages({
//           message: [...messages.message, { msg: message, username: user }],
//         });
//         console.log(`${user}: ${message}`);
//         alert(`ReceiveSpecificMessage ${user}: ${message}`);
//       });

//       await conn.start().catch(err=>{console.log(err);} );

//       await conn.invoke("JoinChatGroupRoom", { userName, chatRoom });
//       await conn.invoke(
//         "SendMessage",
//         userName + " Sending message from client" + chatRoom
//       );
//       setConnection(conn);
//     } catch (err) {
//       console.log(err);
//     }
//     console.log(`User ${userName} joined room ${chatRoom}`);
//   };
//   return (
//     <>
//       <h1>Welcome to ChatRoom</h1>
//       {!connection ? (
//         <ChatScreen joinRoom={joinRoom} />
//       ) : (
//         <ChatRoom message={messages.message} />
//       )}
//     </>
//   );
// }
const sampleData: NotificationData[] = [
  {
    id: 1,
    message: 'This is a sample mfdjhdfglijfn bgilgfj isofg gjbijxbfiujdfn jkzbhdfngjnhgbvnkxbtfgj hbild ntfg bituhgsnkiuxgt hgfinuht hnrevessage 1',
    type: 'Info',
  },
  {
    id: 2,
    message: 'This is a fg nlbjxkfluihtfgilhusgiluutv kunhfxthy uxirh tybk iuhxtrliu hblbi rtlik uhght lrg tlisample message 2',
    type: 'Warning',
  },
  {
    id: 3,
    message: 'Thivndf x nbliofgjbliofgn vhkjkxhbfghbxui hgbvti jkunbxfg tnbfgnb,xgfn dfkjdnfv j,fdh,bvjkdhxfg hbvj nfidjblionh lioftnh .iolhnjjtyhlxkhg;ji hnktfbn igfkbnikcvb  c k. g  gnm  gfk.g/lk gxfh.lkjgighjtlofrs is a sample message 3',
    type: 'Error',
  },
];
function App() {
  const [tabledata , setTableData] = useState<NotificationData[]>(sampleData);
  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     const randomIndex = Math.floor(Math.random() * sampleData.length);
  //     const randomData = sampleData[randomIndex];
  //     setTableData([...tabledata, randomData]);
  //   }, 200000);
  //   return () => clearInterval(interval);
  // }
  // , [tabledata]);




      const conn = new HubConnectionBuilder().withUrl("http://localhost:5036/chatHub")
          .withAutomaticReconnect()
          .configureLogging(LogLevel.Information)
          .build();
        

         const joinRoom = async (userName: string, chatRoom: string) => {
          try {
            //if (conn.state == 'Connected') {
        
           conn.on("ReceiveMessage", (user, message) => {
              if (user != null) {
                console.log(`${user}:  Not null`);
               
              }
              else {
                alert("UserImprovised");
                user = "AdminImprovised";
              }

              if (message != null) {
                console.log(` ${message} not null `);
              }
              else {
                alert("MessageImprovised");
                message = "MessageImprovised";
              }
              console.log(`seeee ${user}: ${message}`);
              const randomIndex = Math.floor(Math.random() * tabledata.length);
              const randomData: NotificationData = { id: randomIndex, message: message + 5, type: 'Info', };
              setTableData((prev) => [...prev, randomData]);
              //setTableData([...tabledata, randomData]);
              console.log(`User=> ${randomData.message} `);
              console.log(`${user}: ${message} now now `);
            });
            if (conn.state == "Disconnected") {
              console.log(conn.state);
              alert("Connect has not stated");
              //return;
              }
                await conn.start().catch(err=>{console.log(err);} );
            
        
            // await conn.invoke("JoinChatGroupRoom", { userName, chatRoom });
            // await conn.invoke(
            //   "SendMessage",
            //   userName + " Sending message from client" + chatRoom
            // );
            if (conn.state == "Connected") {
              console.log(conn.state);
              alert("Connect has stated");
              await conn.invoke("JoinChatRoom", { userName, chatRoom });
              }
          
           
          } catch (err) {
            console.log("Connection state "+ conn.state);
            console.log(err);
          }
          //console.log(`User ${userName} joined room ${chatRoom}`);
        };
          useEffect(() => {
            const randomIndex = Math.floor(Math.random() * tabledata.length)
            joinRoom( "Admin23", "123"+randomIndex  )
            const randomData2:NotificationData =   {id: randomIndex, message: "Justmessage"+randomIndex, type: 'Error',  };
            setTableData((prev)=>[...prev, randomData2]);
    }, []);

  

  return <>
  Welcome to ChatRoom

  <NotificationBoard data={tabledata} />
  </>;
}
export default App;
