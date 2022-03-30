import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';


const Messages = (props) => {
  const { messages, otherUser } = props.conversation;
  const userId = props.userId

  const findLastMessage = (array, id) => {
    let lastIdx;
    for (let i = 0; i < array.length; i++){
      let currentMessage = array[i];
      if (currentMessage.senderId === id){
        lastIdx = i
      }
    }
    return lastIdx;
  }
  const last = findLastMessage(messages, userId)
  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format('h:mm');
        return message.senderId === userId ? (
          <SenderBubble key={message.id} 
                        index={index}
                        text={message.text} 
                        time={time} 
                        otherUser={otherUser} 
                        readStatus={message.readStatus}
                        last={last}/>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })} 
    </Box>
  );
};

export default Messages;
