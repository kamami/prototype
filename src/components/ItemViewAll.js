import React from 'react';
import '../App.css';
import Conversation from 'chat-template/dist/Conversation';
import Messages from '../components/Messages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Paper from 'material-ui/Paper';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
  height: 1000,
  maxHeight: 'none'
};

class ItemViewAll extends React.Component{
  constructor(props){
     super(props);
     this.state = {
         open: false,
         dropdownOpen: false
     };
     this.toggle = this.toggle.bind(this);

   }
   handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

 toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }




    render() {

      const actions = [
        <FlatButton
          label="schließen"
          primary={false}
          onClick={this.handleClose}
style={{color: '#82f2da'}}        />
      ];

        return (
          <div>
                <Card onClick={this.handleOpen} className="ItemViewAll" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
                <div className="overlay">
                      <div className="HoverImg">
                          DETAILS
                      </div>
                      <MuiThemeProvider>

                      <Dialog
                        open={this.state.open} modal={false}
                        actions={actions} onRequestClose={this.handleClose}
                        contentStyle={customContentStyle}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <div>

                                    <img className="DetailImg" src={this.props.backdrop}/>
                                </div>
                                <div style={{marginTop: 30}}>
                                <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
             <DropdownToggle className= "DropdownButton" style={{background: '#82f2da', width: 180, border: '#82f2da'}}>
              Starten:
            </DropdownToggle>
             <DropdownMenu style={{width: 180}}>
               <DropdownItem>
                 <div style={{display: 'flex'}}>
                 <div style={{float: 'left'}}>
                  <img src={require("../assets/Kik-Icon.png")} style={{heigth: 20, width: 20}}/>
                  </div>
                  <div style={{marginLeft: 10, marginTop: 2}}>
                      Kik
                  </div>
                </div>
               </DropdownItem>
               <DropdownItem divider />
                 <DropdownItem>
                   <div style={{display: 'flex'}}>
                   <div style={{float: 'left'}}>
                    <img src={require("../assets/Messenger-Icon.png")} style={{heigth: 20, width: 20}}/>
                    </div>
                    <div style={{marginLeft: 10, marginTop: 2}}>
                      <a href={this.props.messengerLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#000'}}>Messenger</a>
                    </div>
                  </div>
                 </DropdownItem>
                 <DropdownItem divider />
                   <DropdownItem>
                     <div style={{display: 'flex'}}>
                     <div style={{float: 'left'}}>
                      <img src={require("../assets/Slack-Icon.png")} style={{heigth: 20, width: 20}}/>
                      </div>
                      <div style={{marginLeft: 10, marginTop: 2}}>
                          Slack
                      </div>
                    </div>
                   </DropdownItem>
                   <DropdownItem divider />
                     <DropdownItem>
                       <div style={{display: 'flex'}}>
                       <div style={{float: 'left'}}>
                        <img src={require("../assets/Telegram-Icon.png")} style={{heigth: 20, width: 20}}/>
                        </div>
                        <div style={{marginLeft: 10, marginTop: 2}}>
                            Telegram
                        </div>
                      </div>
                     </DropdownItem>
             </DropdownMenu>
           </ButtonDropdown>
         </div>
       </div>
                        <div style={{float: 'right', marginLeft: 20, fontWeight: 'bold'}}>
                          <p style={{fontWeight: 'bold', fontSize: 26, marginBottom: "-0.5rem"}}>
                              {this.props.title}
                          </p>
                          <p style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
                            Beschreibung:
                          </p>
                          <p style={{fontSize: 13}}>
                            {this.props.description}
                          </p>

                          <p style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
                            Preview:
                          </p>
                          <MuiThemeProvider>
                          <Paper style={{width: 652, height: 250, borderRadius: "2em"}} zDepth={1}>
                              <Messages avatar={this.props.backdrop} message1={"This is a test"}/>
                            </Paper>
                          </MuiThemeProvider>
                        </div>
                      </div>
                      </Dialog>
                    </MuiThemeProvider>

                </div>
                </Card>
                <div className="BreakWords" style={{fontSize: 17, marginTop: 20, fontFamily: 'Anton'}}>
                  {this.props.title}
                </div>
                <div className="BreakWords" style={{fontSize: 13, marginTop: 10, paddingBottom: 20, fontWeight: 'lighter'}}>
                  {this.props.overview}
                </div>
                <div style={{display: 'inline-block'}}>
                  <div style={{marginTop: 10}}>
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

              </div>


        );
    }
};

export default ItemViewAll;
