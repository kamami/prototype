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



}).then(() => {
  console.log(this.state.key1)
})

}


handleClickOpen = () => {

  this.setState({ open: true});
};

handleClose = () => {

  this.setState({ open: false });
};




    render() {
      const {  code} = this.props;
      const { secondary, user} = this.state;


        return (
          <div>

            {this.props.code === this.state.key1 ||
              this.props.code === this.state.key2 ||
              this.props.code === this.state.key4 ||
              this.props.code === this.state.key5 ||
              this.props.code === this.state.key6 ||
              this.props.code === this.state.key7 ||
              this.props.code === this.state.key8 ||
              this.props.code === this.state.key9 ||
              this.props.code === this.state.key10 ||
              this.props.code === this.state.key11 ||
              this.props.code === this.state.key12 ||
              this.props.code === this.state.key13 ||
              this.props.code === this.state.key14 ||
              this.props.code === this.state.key15 ||
              this.props.code === this.state.key16
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
                  <CustomSnackbar snackbarOpen={this.state.copied} />

                  <div>

                      <CopyToClipboard text={this.props.code}
                        onCopy={() => this.setState({copied: true})}>
                        <div style={{display: 'flex'}}>
                        <Button variant="contained" style={{width: '100%',boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#FF6B6B', color: '#ffffff'}}>

                          {this.props.code}

                          <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                        </Button>
                        </div>
                      </CopyToClipboard>
                  </div>

                  <DialogContentText>
                    {this.state.copied &&



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
