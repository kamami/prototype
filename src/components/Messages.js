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
    var inbound = true;

      var messages = [{
          message: this.props.message1,
          backColor: '#82f2da',
          textColor: "white",
          inbound: this.props.position1,
          avatar: this.props.avatar,
          duration: 4000
      },

          {
              message: this.props.message2,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position2,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message3,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position3,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message4,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position4,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message5,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position5,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message6,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position6,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message7,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position7,
              avatar: this.props.avatar,
              duration: 4000,
          },
          {
              message:this.props.message8,
              backColor: '#82f2da',
              textColor: "white",
              inbound: this.props.position8,
              avatar: this.props.avatar,
              duration: 4000,
          }];


    return(

      <Conversation messages={messages} height={220}/>
    )
  }
}




export default Messages;
