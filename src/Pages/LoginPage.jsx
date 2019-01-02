import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Drawer from '../components/Drawer';
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
import Facebook from '../components/Facebook';
import FacebookLoginButton from '../components/FacebookLoginButton';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});





class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginFacebook = this.loginFacebook.bind(this);
    }

    loginFacebook = () => {
      window.location.reload();

      history.push('/profilepage');

    }



    handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

 handleClickShowPassword = () => {
   this.setState(state => ({ showPassword: !state.showPassword }));
 };


    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }



    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        const { classes } = this.props;

        const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

        return (

            <div >
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

                <Typography style={{fontFamily: 'Roboto', fontSize: 20, color: '#000'}}>

              Login
                </Typography>

                </Toolbar>
              </AppBar>

              <div style={{marginTop: 70 }}>
                <Fade in={true}  timeout={2000}>


                <div  style={{display: 'flex'}}>
    <Typography style={{fontFamily: 'Devonshire', fontSize: 90, color: '#B00020', marginLeft: 'auto', marginRight: 'auto', marginBottom: 18, marginTop: 18}}>

  Genkō
    </Typography>
                </div>

              </Fade>

                                <form name="form" >
                      <div className={'form-group' + (submitted && !username ? ' has-error' : '')} >
                        <div style={{display: 'flex'}}>
                          <MuiThemeProvider theme={theme}>

                            <TextField
             id="outlined-adornment-password"
             variant="outlined"
             label="Benutzername"
             value={this.state.username}
             onChange={this.handleChange('username')}
             style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}} />



                        </MuiThemeProvider>
                      </div>
                      <div>
                      {submitted && !username &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto', color: 'red'}}>
                                Benutzername erforderlich                            </p>
                          </div>

                        </div>

                      }
                    </div>

                      </div>

                      <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <div style={{display: 'flex', marginTop: 30}}>
                          <MuiThemeProvider theme={theme}>

                            <TextField
             id="outlined-adornment-password"
             variant="outlined"
             type={this.state.showPassword ? 'text' : 'password'}
             label="Passwort"
             value={this.state.password}
             onChange={this.handleChange('password')}
             InputProps={{
               endAdornment: (
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="Toggle password visibility"
                     onClick={this.handleClickShowPassword}
                   >
                     {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               ),
             }}
             style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}} />

                          </MuiThemeProvider>

                      </div>
                      <div>

                      {submitted && !password &&
                        <div>
                          <div className="help-block"  style={{marginLeft: '10%'}}>
                              <p style={{fontFamily: 'Roboto', color: 'red'}}>
                            Passwort erforderlich
                          </p>
                          </div>

                        </div>
                      }
                    </div>
                    </div>

                      <div className="form-group" style={{display: 'flex', marginLeft: '10%'}}>
                        <div onClick={this.handleSubmit}>
                          <LoginButton background='green' label='Login'/>

                        </div>




                          <Link to="/register">
                              <RegisterButton background='#B00020' label='Registrieren'/>
                          </Link>

                      </div>
                      <div>

                      </div>



                  </form>
            



              </div>

              {loggingIn &&
                <Dialog
                  open={true}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullScreen
                  PaperProps={{


    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'none',
    },
  }}
                >
                <DialogContent >
                  <div  style={{display: 'flex'}}>

                  <div  class="loader" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '100%'}}>

                  </div>
                </div>
                </DialogContent>
              </Dialog>


           }



            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
