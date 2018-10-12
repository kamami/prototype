import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Facebook from '../components/Facebook';

class UserProfile extends React.Component{

  state = {
  open: false,
}


handleOpen = () => {
  this.setState({open: true});
}

handleClose = () => {
  this.setState({open: false});
}

    render() {
      const actions = [
     <FlatButton
       label="schließen"
       onClick={this.handleClose}
       hoverColor='#63fff7'
       color='#000'

     />

   ];
        return (

          <MuiThemeProvider>

                <div className="UserProfile">

                <RaisedButton label=  {this.props.isLoggedIn? 'Logout' : 'Login'}
                 onClick={this.handleOpen} className="Login" backgroundColor	='#63fff7' labelColor='#ffffff' />

                  

       <Dialog
         title="Login mit Facebook"
         actions={actions}
         modal={true}
         open={this.state.open}
         hoverColor='red'
       >

          <Facebook/>
       </Dialog>
       </div>

       </MuiThemeProvider>



        );
    }
};

export default UserProfile;
