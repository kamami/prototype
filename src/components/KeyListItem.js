import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {authHeader} from '../_helpers';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/CheckCircle';
import Cancel from '@material-ui/icons/Cancel';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopy from '@material-ui/icons/FileCopy';
import CustomSnackbar from '../components/CustomSnackbar';




class KeyListItem extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      open: false,
      dropdownOpen: false

  };

}

componentDidMount(){
  let user = JSON.parse(localStorage.getItem('user'));
  var requestUrl = 'https://mighty-atoll-75521.herokuapp.com/users/';
  var id = user._id
  fetch(requestUrl + id, {
    method: 'get',
    headers: {
      ...authHeader(),
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  }).then((response)=>{
  return response.json();
})
.then((user)=>{
  this.setState({key1: user._1});
    this.setState({key3: user._3});





}).then(() => {
  console.log(this.state.key1)
})

}


handleClickOpen = () => {

  this.setState({ open: true});
};

handleClose = () => {
  this.setState({ open: false });
  this.setState({showButton: false});
};

closeSnackbar=() => {
  this.setState({copied: false})
}

showFacebook = () =>{
  this.setState({showButton: true})
}




    render() {
      const {  code} = this.props;
      const { secondary, user} = this.state;


        return (
          <div>

            {this.props.code === this.state.key1 ||
              this.props.code === this.state.key3 

              ?

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
                    style={{color: '#484F58'}}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
                      <CheckIcon style={{color: '#00C9B7'}} />
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
                  <CustomSnackbar snackbarOpen={this.state.copied} closeSnackbar={this.closeSnackbar}/>

                  <div>

                      <CopyToClipboard text={this.props.code}
                        onCopy={() => this.setState({copied: true})}>
                        <div style={{display: 'flex'}}>
                        <Button variant="contained" style={{width: '100%',boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#FF6B6B', color: '#ffffff'}} onClick={this.showFacebook}>

                          {this.props.code}

                          <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                        </Button>
                        </div>
                      </CopyToClipboard>
                  </div>

                  <DialogContentText>
                    {this.state.showButton &&

                        <div style={{marginTop: '24px'}}>
                          <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

                          <Button variant="contained" style={{backgroundColor: '#3b5998', width: '100%',
                            color: '#ffffff', boxShadow: 'none', borderRadius: "2em 2em 2em 2em"}}>

                          Facebook

                          <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}}/>
                          </Button>
                        </a>


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

                     <ListItem button disabled onClick={this.handleClickOpen}>
                       <ListItemAvatar>
                         <Avatar src={this.props.image} />
                       </ListItemAvatar>
                       <ListItemText
                         primary={this.props.title}
                         secondary={secondary ? this.props.key : null}
                       />
                       <ListItemSecondaryAction>
                         <IconButton aria-label="Delete">
                           <Cancel style={{color: 'rgba(255, 107, 107, 0.4)'}} />
                         </IconButton>
                       </ListItemSecondaryAction>
                     </ListItem>


               </div>
               </Fade>
             </div>
  }
      </div>


        );
    }
};

export default KeyListItem;
