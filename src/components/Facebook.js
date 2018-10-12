import React from 'react';
import FacebookLogin from 'react-facebook-login';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    if (this.state.isLoggedIn) {
      fbContent = (
        <div style={{width: 400, margin: 'auto', background: '#ffffff',
      padding: 20}}>
      <img src={this.state.picture} alt={this.state.name} />
      <h2> Hallo {this.state.name} :) </h2>
      <MuiThemeProvider>
      <RaisedButton label={this.state.isLoggedIn? 'Logout' : 'Login'}
       className="Login" backgroundColor	='#63fff7' labelColor='#ffffff'onClick={this.logout} />
       </MuiThemeProvider>

        </div>
      )

    }else{
      fbContent = (
        <FacebookLogin
    appId="2196872730553081"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
      )
    }

  return(
    <div>
      {fbContent}
    </div>

  )
}

}
