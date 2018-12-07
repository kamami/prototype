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

import '../App.css';



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



    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }


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
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    style={{outline: 'none'}}
                    onClick={history.goBack}
                  >
                    <BackIcon />
                  </IconButton>


                </Toolbar>
              </AppBar>
              <Fade in={true}  timeout={2000}>

              <div style={{marginTop: 100 }}>


                <div  style={{display: 'flex'}}>
    <Typography style={{fontFamily: 'Lobster', fontSize: 70, color: '#B00020', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50}}>

  Quest
    </Typography>
                </div>


                                <form name="form" >
                      <div className={'form-group' + (submitted && !username ? ' has-error' : '')} >
                        <div style={{display: 'flex'}}>
                          <MuiThemeProvider theme={theme}>

                          <OutlinedInput

                            type="text"
                            placeholder="Benutzername"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            style={{marginLeft: 'auto', marginRight: 'auto', width: '80%', borderColor: 'primary'}} />
                        </MuiThemeProvider>
                      </div>
                      <div>
                      {submitted && !username &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto'}}>
                                Username is required
                            </p>
                          </div>

                        </div>

                      }
                    </div>

                      </div>

                      <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <div style={{display: 'flex', marginTop: 30}}>
                          <MuiThemeProvider theme={theme}>

                          <OutlinedInput

                            type="password"
                            placeholder="Passwort"
                            name="password"
                            value={password}
                            style={{marginLeft: 'auto', marginRight: 'auto', width: '80%', borderColor: 'primary'}}
                            onChange={this.handleChange} />
                          </MuiThemeProvider>

                      </div>
                      <div>

                      {submitted && !password &&
                        <div>
                          <div className="help-block"  style={{marginLeft: '10%'}}>
                              <p style={{fontFamily: 'Roboto'}}>
                            Password is required
                          </p>
                          </div>

                        </div>
                      }
                    </div>
                    </div>

                      <div className="form-group" style={{display: 'flex', marginLeft: '10%'}}>
                        <div onClick={this.handleSubmit}>
                          <LoginButton />

                        </div>



                          {loggingIn &&
                              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWnpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          }
                          <Link to="/register">
                            <RegisterButton />
                          </Link>

                      </div>



                  </form>

              </div>
            </Fade>


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
