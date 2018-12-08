import React from 'react';
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
import '../App.css';

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

                </Toolbar>
              </AppBar>

              <div style={{marginTop: 100 }}>
                <Fade in={true}  timeout={2000}>


                <div  style={{display: 'flex'}}>
    <Typography style={{fontFamily: 'Lobster', fontSize: 70, color: '#B00020', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50}}>

  Quest
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



                  </form>

              </div>


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
