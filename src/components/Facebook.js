import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import RaisedButton from 'material-ui/RaisedButton';
import { history } from '../_helpers';
import FacebookLoginButton from '../components/FacebookLoginButton';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export default class Facebook extends React.Component{

  constructor(props) {
        super(props)

this.state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture:  ''
  }}

  responseFacebook = response => {

      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      })
  }

  componentClicked = () => console.log('clicked');
  logout = () => this.setState({isLoggedIn: false});

render(){
  let fbContent;

  const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

    if (this.state.isLoggedIn) {
      fbContent = (
      <Card style={{marginTop: 100, background: '#ffffff',
    padding: 20, width: '88%', marginLeft: 'auto', marginRight: 'auto'}}>

      <img src={this.state.picture} alt={this.state.name} style={{float: 'left', marginRight: 20, marginTop: 9}}/>
      <p style={{fontSize: 20, fontFamily: 'roboto'}}>{this.state.name} </p>
        <MuiThemeProvider theme={theme}>

      <Button onClick={this.logout} variant="contained" color="primary" style={{color: '#ffffff', backgroundColor: '#3b5998'}}>
        {this.state.isLoggedIn? 'Logout' : 'Login'}
      </Button>
      </MuiThemeProvider>
     </Card>

      )

    }else{
      fbContent = (
        <div style={{marginTop: 100}}>

          <FacebookLogin
      appId="2196872730553081"
      autoLoad
      fields="name,email,picture"
      callback={this.responseFacebook}
      render={renderProps => (
        <div onClick={renderProps.onClick} style={{marginTop: -20}}>
          <FacebookLoginButton background='#3b5998' label='Facebook'/>

        </div>
  )}
    />

        </div>

      )
    }

  return(
    <div>
      {fbContent}
    </div>

  )
}

}
