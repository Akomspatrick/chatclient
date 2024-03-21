import React from 'react'

import MsgContainer from './MsgContainer';
import { ChatRoomProps } from './ChatRoomProps';

const ChatRoom = ({message}:ChatRoomProps) => {
 // alert('Were u called at all ');
    //alert(message[0].msg);
  return (
    <>
     <div>ChatRoom</div>
    <MsgContainer   message={message} />
    </>
  )
}

export default ChatRoom ;