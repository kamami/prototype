import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { history } from '../_helpers';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import { authHeader } from '../_helpers';
import Credits from '@material-ui/icons/MonetizationOn';

class Profile extends React.Component {

  constructor(props){
  super(props);
  this.state = {
      open: false,
      dropdownOpen: false,

  };
  this.componentDidMount = this.componentDidMount.bind(this);

}


    componentDidMount() {
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
      })
      .then((response)=>{
      return response.json();
    }) .then((user)=>{
      this.setState({credits : user.credits});


      })
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    logout(){
      history.push('/login');

    }

    render() {
        const { user, users } = this.props;
        const theme = createMuiTheme({
        palette: {
          primary: green,
        },
        typography: {
          useNextVariants: true,
        },
      });
        return (
          <div>
          <div>
              <AppBar
                position="fixed"

              >
                <Toolbar  style={{background: '#ffffff', color: '#000',       maxHeight: '56px'
      }}>
      <Link to="/">

                  <IconButton

                    style={{outline: 'none', color: '#000'}}
                  >
                    <BackIcon />
                  </IconButton>
                </Link>

                {user && user.token &&
                          <Button  variant="outlined" style={{position: 'absolute', right: 20, background: '#B00020', color: '#ffffff', fontSize: 18, fontFamily: 'roboto'}}>
                            <Credits />
                             {this.state.credits}</Button>

                            }

                </Toolbar>
              </AppBar>
            </div>
              <div>
                <Card style={{marginTop: 100, background: '#ffffff',
              padding: 20, width: '88%', marginLeft: 'auto', marginRight: 'auto'}}>

                <p style={{fontSize: 20, fontFamily: 'roboto'}}>{user.firstName} {user.lastName} </p>

                  <MuiThemeProvider theme={theme}>

                <Button  onClick={this.logout} variant="contained" color="primary" style={{color: '#ffffff', backgroundColor: '#B00020'}}>
                Logout
                </Button>
                </MuiThemeProvider>

               </Card>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(Profile);
export { connectedHomePage as Profile };
