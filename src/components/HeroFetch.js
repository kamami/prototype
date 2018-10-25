import '../App.css';
import React from 'react';
import HeroButton from './HeroButton';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import {Card, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class HeroFetch extends React.Component{
  constructor(props){
     super(props);
     this.state = {
         open: false,
     };
      this.toggle = this.toggle.bind(this);

   }

   toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
    render() {

        return (

            <div id="hero" className="Hero">

                <div className="content" >
                  <MuiThemeProvider >
                      <Paper zDepth={4} style={{background: 'transparent', padding: 40, width: 1000, borderRadius: '2em'}}>
                        <div style={{display: 'inline-block'}}>
                      <div style={{float: 'right', marginLeft: 80}}>
                        <img className="DetailImg" src={this.props.backdrop}/>
                          <div style={{marginTop: 30}}>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Messenger-Icon.png")} className="iconButton" alt="Messenger"/>
                            </a>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Kik-Icon.png")} className="iconButton"/>
                            </a>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Slack-Icon.png")} className="iconButton"/>
                            </a>
                          </div>
                          <div style={{marginTop: 5}}>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Telegram-Icon.png")} className="iconButton"/>
                            </a>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Twitter-Icon.png")} className="iconButton"/>
                            </a>
                            <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Discord-Icon.png")} className="iconButton"/>
                            </a>
                          </div>
                      </div>


                <p style={{fontSize:45, marginBottom: 30, fontFamily: 'Anton'}}>{this.props.title}</p>
                    <h2 style={{marginBottom: 30}}>{this.props.body}</h2>
                    <p style={{marginBottom: 100}}>{this.props.description}</p>

                      </div>

                    </Paper>

                  </MuiThemeProvider>

                                  </div>



                <div className="overlay"></div>


            </div>
        );
    }
}

export default HeroFetch;
