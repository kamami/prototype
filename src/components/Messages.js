import React from 'react';
import Conversation from 'chat-template/dist/Conversation';

class Messages extends React.Component {

  constructor(props){
    super(props);
    this.state={
      messages: []
    }
  }

  render(){
      var messages = [{
          message: this.props.message1,
          backColor: '#82f2da',
          textColor: "white",
          inbound: true,
          avatar: this.props.avatar,
          duration: 3000,
      },

          {
              message:'Ich bin ein Geist!!',
              backColor: '#f4f4f4',
              textColor: "black",
              inbound: false,
              avatar: this.props.avatar,
              duration: 3000,
          },
          {
              message:'Wuuuuuuhhhhh...',
              backColor: '#f4f4f4',
              textColor: "black",
              inbound: false,
              avatar: this.props.avatar,
              duration: 3000,
          },
          {
              message:'Oh Nein, ich hab solche Angst!',
              backColor: '#82f2da',
              textColor: "white",
              inbound: true,
              avatar: this.props.avatar,
              duration: 3000,
          },
          {
              message:'Hilfe!!!',
              backColor: '#82f2da',
              textColor: "white",
              inbound: true,
              avatar: this.props.avatar,
              duration: 3000,
          }];


    return(

      <Conversation messages={messages} height={220}/>
    )
  }
}




export default Messages;
