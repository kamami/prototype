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
import Credits from '@material-ui/icons/MonetizationOn';
import {authHeader} from '../_helpers';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DrawerBottom from '../components/DrawerBottom';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/CheckCircle';
import Cancel from '@material-ui/icons/Cancel';
import Snackbar from '@material-ui/core/Snackbar';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopy from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    paddingTop: 5,
    },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: '#ffffff',

  },


  container: {
   display: 'flex',
   flexWrap: 'wrap'
 },


 button: {
  margin: theme.spacing.unit,
  width: '90%',
  color: '#ffffff',
  backgroundColor: 'green'
},
});

class KeyListItem extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      open: false,
      dropdownOpen: false,
      key1: ""

  };

}

componentDidMount(){
  let user = JSON.parse(localStorage.getItem('user'));
  var requestUrl = 'https://mighty-atoll-75521.herokuapp.com/users/';


  fetch(requestUrl + user._id, {
    method: 'get',
    headers: {
      ...authHeader(),
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  })
.then((user)=>{
  this.setState({key1: user._1});
  this.setState({key2: user._2});
  this.setState({key3: user._3});
  this.setState({key4: user._4});
  this.setState({key5: user._5});
  this.setState({key6: user._6});
  this.setState({key7: user._7});
  this.setState({key8: user._8});
  this.setState({key9: user._9});
  this.setState({key10: user._10});
  this.setState({key11: user._11});
  this.setState({key12: user._12});
  this.setState({key13: user._13});
  this.setState({key14: user._14});
  this.setState({key15: user._15});
  this.setState({key16: user._16});



  })

}


handleClickOpen = () => {

  this.setState({ open: true});
};

handleClose = () => {

  this.setState({ open: false });
};




    render() {
      const { classes, theme, code} = this.props;
      const { secondary, bots, user } = this.state;


        return (
          <div>

              {this.state.key1 === this.props.code ?

          <div>

          <Fade in={true}  timeout={2000}>

              <div>

                <ListItem button onClick={this.handleClickOpen}>
                  <ListItemAvatar>
                    <Avatar src={this.props.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={this.props.title}
                    secondary={secondary ? this.props.key : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                      <CheckIcon style={{color: 'green'}} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <div>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  scroll={this.state.scroll}
                  style={{overflow: 'hidden', height: 'calc(100vh + 40px)'}}
                  PaperProps={{

              style: {
              backgroundColor: '#f6f6f6',
              boxShadow: 'none',
              width: '90%'
              },
              }}
                >

                <DialogContent >
                <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                  <div>

                      <CopyToClipboard text={this.props.code}
                        onCopy={() => this.setState({copied: true})}>
                        <div style={{display: 'flex'}}>
                        <Button variant="contained" style={{width: '100%',boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: 'green', color: '#ffffff'}}>

                          {this.props.code}

                          <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                        </Button>
                        </div>
                      </CopyToClipboard>
                  </div>

                  <DialogContentText>
                    {this.state.copied &&
                      <div>

                      <span style={{fontFamily: 'Roboto', fontSize: '1em', color: 'green', fontWeight: 'bold', margin: 'auto'}}>Erfolgreich kopiert!</span>


                        <div style={{marginTop: '24px', paddingLeft: '5vw', paddingRight: '5vw'}}>
                          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>

                            {this.props.messenger !== "." &&
                            <a href={this.props.messenger} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Messenger-Icon.png")} className="iconButtonKeys" alt="Messenger"/>
                            </a>
                            }
                            {this.props.kik !== "." &&
                            <a href={this.props.kik} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Kik-Icon.png")} className="iconButtonKeys"/>
                            </a>
                            }

                            {this.props.slack !== "." &&
                            <a href={this.props.slack} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Slack-Icon.png")} className="iconButtonKeys"/>
                            </a>
                            }

                            {this.props.telegram !=="." &&
                            <a href={this.props.telegram} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Telegram-Icon.png")} className="iconButtonKeys"/>
                            </a>
                            }

                            {this.props.twitter !== "." &&
                            <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Twitter-Icon.png")} className="iconButtonKeys"/>
                            </a>
                            }
                            {this.props.discord !== "." &&
                            <a href={this.props.discord} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/Discord-Icon.png")} className="iconButtonKeys"/>
                            </a>
                            }
                          </div>


                      </div>
                    </div>
                  }

                  </DialogContentText>


                    </div>
                </DialogContent>



                </Dialog>
                </div>



          </div>
          </Fade>
        </div>
        :
        <div>

        <Fade in={true}  timeout={2000}>

            <div>

              <ListItem button onClick={this.handleClickOpen}>
                <ListItemAvatar>
                  <Avatar src={this.props.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={this.props.title}
                  secondary={secondary ? this.props.key : null}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                    <CheckIcon style={{color: 'green'}} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <div>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={this.state.scroll}
                style={{overflow: 'hidden', height: 'calc(100vh + 40px)'}}
                PaperProps={{


            style: {
            backgroundColor: '#f6f6f6',
            boxShadow: 'none',
            width: '90%'
            },
            }}
              >

              <DialogContent >
              <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                <div>

                    <CopyToClipboard text={this.props.code}
                      onCopy={() => this.setState({copied: true})}>
                      <div style={{display: 'flex'}}>
                      <Button variant="contained" style={{width: '100%',boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: 'green', color: '#ffffff'}}>

                        {this.props.code}

                        <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                      </Button>
                      </div>
                    </CopyToClipboard>
                </div>

                <DialogContentText>
                  {this.state.copied &&
                    <div>

                    <span style={{fontFamily: 'Roboto', fontSize: '1em', color: 'green', fontWeight: 'bold', margin: 'auto'}}>Erfolgreich kopiert!</span>


                      <div style={{marginTop: '24px', paddingLeft: '5vw', paddingRight: '5vw'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>

                          {this.props.messenger !== "." &&
                          <a href={this.props.messenger} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Messenger-Icon.png")} className="iconButtonKeys" alt="Messenger"/>
                          </a>
                          }
                          {this.props.kik !== "." &&
                          <a href={this.props.kik} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Kik-Icon.png")} className="iconButtonKeys"/>
                          </a>
                          }

                          {this.props.slack !== "." &&
                          <a href={this.props.slack} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Slack-Icon.png")} className="iconButtonKeys"/>
                          </a>
                          }

                          {this.props.telegram !=="." &&
                          <a href={this.props.telegram} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Telegram-Icon.png")} className="iconButtonKeys"/>
                          </a>
                          }

                          {this.props.twitter !== "." &&
                          <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Twitter-Icon.png")} className="iconButtonKeys"/>
                          </a>
                          }
                          {this.props.discord !== "." &&
                          <a href={this.props.discord} target="_blank" rel="noopener noreferrer">
                          <img src={require("../assets/Discord-Icon.png")} className="iconButtonKeys"/>
                          </a>
                          }
                        </div>


                    </div>
                  </div>
                }

                </DialogContentText>


                  </div>
              </DialogContent>



              </Dialog>
              </div>



        </div>
        </Fade>
      </div>

      }

      </div>


        );
    }
};

export default KeyListItem;
