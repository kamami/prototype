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
      dropdownOpen: false

  };

}

handleClickOpen = () => {

  this.setState({ open: true});
};

handleClose = () => {

  this.setState({ open: false });
};




    render() {
      const { classes, theme } = this.props;
      const { secondary, bots } = this.state;


        return (
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
                    <IconButton aria-label="Delete">
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

                      <CopyToClipboard text="123456789"
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
                  <div>
                    {this.state.copied ? <span style={{fontFamily: 'Roboto', fontSize: '1em', color: 'green', fontWeight: 'bold'}}>Erfolgreich kopiert!</span> : null}

                  </div>
                  </DialogContentText>





 </div>
                </DialogContent>



                </Dialog>
                </div>



          </div>
          </Fade>


        );
    }
};

export default KeyListItem;
