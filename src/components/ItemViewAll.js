import React from 'react';
import '../App.css';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Media from "react-media";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
  maxHeight: 'none'
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}




class ItemViewAll extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      open: false,
      dropdownOpen: false
  };
  this.toggle = this.toggle.bind(this);

}

     handleClickOpen = () => {
       this.setState({ open: true });
     };

     handleClose = () => {
       this.setState({ open: false });
     };

     toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

    render() {

      const { classes } = this.props;


        return (
          <div>
                <Card className="ItemViewAll" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
                  <Media query="(min-width: 600px)">
                        {matches =>
                          matches ? (
                            <div>
                  <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    TransitionComponent={Transition}

                  >

                    <DialogContent>
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

               {this.props.kik != "." &&
                 <div>
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
                </div>
             }

             {this.props.messenger != "." &&
                  <div>
                     <DropdownItem>
                       <div style={{display: 'flex'}}>
                         <div style={{float: 'left'}}>
                           <img src={require("../assets/Messenger-Icon.png")} style={{heigth: 20, width: 20}}/>
                         </div>
                         <div style={{marginLeft: 10, marginTop: 2}}>
                           <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#000'}}>Messenger</a>
                         </div>
                       </div>
                     </DropdownItem>
                   </div>
               }

                   {this.props.slack != "." &&
                     <div>
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
                        </div>
                 }

                 {this.props.twitter != "." &&
                   <div>
                        <DropdownItem>
                          <div style={{display: 'flex'}}>
                            <div style={{float: 'left'}}>
                              <img src={require("../assets/Twitter-Icon.png")} style={{heigth: 20, width: 20}}/>
                            </div>
                            <div style={{marginLeft: 10, marginTop: 2}}>
                              Slack
                            </div>
                          </div>
                        </DropdownItem>
                      </div>
               }

                                    {this.props.discord!= "." &&
                                      <div>
                                           <DropdownItem>
                                             <div style={{display: 'flex'}}>
                                               <div style={{float: 'left'}}>
                                                 <img src={require("../assets/Discord-Icon.png")} style={{heigth: 20, width: 20}}/>
                                               </div>
                                               <div style={{marginLeft: 10, marginTop: 2}}>
                                                 Slack
                                               </div>
                                             </div>
                                           </DropdownItem>
                                         </div>
                                  }

                     {this.props.telegram != "." &&
                       <div>
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
                   </div>
                   }
             </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
                        <div style={{float: 'right', marginLeft: 20, fontWeight: 'bold'}}>
                          <p style={{fontWeight: 'bold', fontSize: 26, marginBottom: "-0.5rem", fontFamily: 'Anton'}}>
                              {this.props.title}
                          </p>
                          <p style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
                            Beschreibung:
                          </p>
                          <p style={{fontSize: 13}}>
                            {this.props.description}
                          </p>


                        </div>
                      </div>
                    </DialogContent>
                    <DialogActions>

                      <Button onClick={this.handleClose} style={{color: '#82f2da'}}>
                        Schliessen
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <div className="overlay" onClick={this.handleClickOpen}>
                        <div className="HoverImg">
                            DETAILS
                        </div>
                  </div>
                </div>


              ):(
                <div>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullScreen
                >
                <div className="Header" style={{position: 'absolute'}} >
          <IconButton onClick={this.handleClose} aria-label="Close" >
            <CloseIcon style={{color: '#ffffff', fontSize: 30}}/>
          </IconButton>

      </div>
                  <DialogContent>
                    <div style={{marginTop: 90, display: 'inline-block', display: 'flex'}}>
                         <div style={{ display: 'inline-block', flex: 1}}>
                           <img className="DetailImgMobile" src={this.props.backdrop}/>
                         </div>
                         <div style={{display: 'inline-block', height: '22vh', width: '22vh', flex: 1, marginLeft: 40}}>
                           {this.props.messenger != "." &&
                           <a href={this.props.messenger} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Messenger-Icon.png")} className="iconButtonDetailsMobile" alt="Messenger"/>
                         </a>
                         }
                         {this.props.kik != "." &&
                         <a href={this.props.kik} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Kik-Icon.png")} className="iconButtonDetailsMobile"/>
                         </a>
                       }

                         {this.props.slack != "." &&
                         <a href={this.props.slack} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Slack-Icon.png")} className="iconButtonDetailsMobile"/>
                         </a>
                       }

                         {this.props.telegram != "." &&
                         <a href={this.props.telegram} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Telegram-Icon.png")} className="iconButtonDetailsMobile"/>
                         </a>
                         }

                         {this.props.twitter != "." &&
                         <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Twitter-Icon.png")} className="iconButtonDetailsMobile"/>
                         </a>
                         }
                         {this.props.discord != "." &&
                         <a href={this.props.discord} target="_blank" rel="noopener noreferrer">
                         <img src={require("../assets/Discord-Icon.png")} className="iconButtonDetailsMobile"/>
                         </a>
                       }

                       </div>
                 </div>
                         <div>
                           <div className="BreakWords" style={{fontSize: '2rem', marginTop: 40, fontFamily: 'Anton', width: '100%'}}>
                             {this.props.title}
                           </div>
                           <div className="BreakWords" style={{fontSize: '1.3rem', marginTop: 20, paddingBottom: 20, fontWeight: 'lighter', width: '100%'}}>
                             {this.props.description}
                           </div>


                       </div>
                  </DialogContent>
                  <DialogActions>

                    <Button onClick={this.handleClose} style={{color: '#82f2da'}}>
                      Schliessen
                    </Button>
                  </DialogActions>
                </Dialog>
              <div className="overlay" onClick={this.handleClickOpen}>
                    <div className="HoverImg">
                        DETAILS
                    </div>
              </div>
            </div>


              ) }
                  </Media>
                </Card>
                <div className="BreakWords" style={{fontSize: 17, marginTop: 20, fontFamily: 'Anton'}}>
                  {this.props.title}
                </div>
                <div className="BreakWords" style={{fontSize: 13, marginTop: 10, paddingBottom: 20, fontWeight: 'lighter'}}>
                  {this.props.overview}
                </div>
                <div style={{display: 'inline-block'}}>

                    {this.props.messenger != "." &&
                    <a href={this.props.messenger} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Messenger-Icon.png")} className="iconButton" alt="Messenger"/>
                  </a>
                  }
                  {this.props.kik != "." &&
                  <a href={this.props.kik} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Kik-Icon.png")} className="iconButton"/>
                  </a>
                }
                  {this.props.slack != "." &&
                  <a href={this.props.slack} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Slack-Icon.png")} className="iconButton"/>
                  </a>
                }

                  {this.props.telegram != "." &&
                  <a href={this.props.telegram} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Telegram-Icon.png")} className="iconButton"/>
                  </a>
                  }
                  {this.props.twitter != "." &&
                  <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Twitter-Icon.png")} className="iconButton"/>
                  </a>
                  }
                  {this.props.discord != "." &&
                  <a href={this.props.discord} target="_blank" rel="noopener noreferrer">
                  <img src={require("../assets/Discord-Icon.png")} className="iconButton"/>
                  </a>
                }

            </div>

              </div>


        );
    }
};

export default ItemViewAll;
