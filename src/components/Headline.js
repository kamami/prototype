import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Headline extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }



    render() {
        return (
          <div style={{position: 'absolute', marginLeft: 750}}>

          <p style={{color: 'white', fontSize: 50, fontFamily: 'Anton', marginTop: 23}}>
              Auserlesene Chatbots.
          </p>

          </div>


        )
      }
    }

export default Headline;
