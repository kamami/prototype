import React from 'react';
import { connect } from 'react-redux';
import { userActions, alertActions } from '../_actions';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { history } from '../_helpers';
import LoginButton from '../components/LoginButton';
import CloseButton from '../components/CloseButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ErrorMessages from '../components/ErrorMessages';

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


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''

            },
            submitted: false,
            open: true

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }





    handleChange = name => event => {
   this.setState({ user: {...this.state.user,[name]: event.target.value }});
 };

 closeSnackbar = () =>{
   this.setState({
     open: false
   })
 }


    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });

        const { user } = this.state;
        const { dispatch } = this.props;

        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
            dispatch(alertActions.clear());

            {this.props.alertState.message &&

            this.setState({open:true}, () => {

              return this.state.open;
            }
            )
          }
        }
    }



    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const { classes } = this.props;

        const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});
        return (
            <div>
              <AppBar
                position="fixed"
                style={{minHeight: 56}}

              >
                <Toolbar  style={{background: '#ffffff', color: '#000', maxHeight: '56px', minHeight: 56
      }}>

                  <IconButton
                    onClick={history.goBack}
                    style={{outline: 'none', color: '#000'}}
                  >
                    <BackIcon />
                  </IconButton>

                <Typography style={{fontFamily: 'Roboto', fontSize: 20, color: '#000'}}>

              Registrieren
                </Typography>

                </Toolbar>
              </AppBar>
              <div style={{marginTop: 70 }}>

                {this.props.alertState.message &&
                  <ErrorMessages error={this.props.alertState.message} openError={this.state.open} closeSnackbar={this.closeSnackbar}/>

                }




                <Fade in={true}  timeout={2000}>

                <div  style={{display: 'flex'}}>
                  <Typography style={{fontFamily: 'Pacifico', fontSize: '4em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3vh', marginTop: '3vh'}} className="logoColor">

  Fable.
    </Typography>
                </div>
              </Fade>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                      <div style={{display: 'flex'}}>
                        <MuiThemeProvider theme={theme}>

                          <TextField
           id="outlined-adornment-password"
           variant="outlined"
           label="Vorname"
           value={this.state.firstName}
           onChange={this.handleChange('firstName')}
           style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}} />



                      </MuiThemeProvider>
                    </div>
                    <div>
                      {submitted && !user.firstName &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto', color: 'red'}}>
                                Vorname erforderlich
                            </p>
                          </div>

                        </div>

                      }
                    </div>
                  </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                      <div style={{display: 'flex', marginTop: '3vh'}}>
                        <MuiThemeProvider theme={theme}>

                          <TextField
           id="outlined-adornment-password"
           variant="outlined"
           label="Nachname"
           value={this.state.lastName}
           onChange={this.handleChange('lastName')}
           style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}} />



                      </MuiThemeProvider>
                    </div>
                    <div>
                      {submitted && !user.lastName &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto', color: 'red'}}>
                                Nachname erforderlich
                            </p>
                          </div>

                        </div>

                      }
                    </div>
                  </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                      <div style={{display: 'flex', marginTop: '3vh'}}>
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
                      {submitted && !user.username &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto', color: 'red'}}>
                                Benutzername erforderlich
                            </p>
                          </div>

                        </div>

                      }
                    </div>
                  </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                      <div style={{display: 'flex', marginTop: '3vh'}}>
                        <MuiThemeProvider theme={theme}>

                          <TextField
           id="outlined-adornment-password"
           variant="outlined"
           label="Passwort"
           type='password'
           value={this.state.password}
           onChange={this.handleChange('password')}
           style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}} />



                      </MuiThemeProvider>
                    </div>
                    <div>
                      {submitted && !user.password &&
                        <div>
                          <div className="help-block" style={{marginLeft: '10%'}}>
                            <p style={{fontFamily: 'Roboto', color: 'red'}}>
                                Passwort erforderlich
                            </p>
                          </div>

                        </div>

                      }
                    </div>
                  </div>
                  <div className="form-group" style={{display: 'flex', marginLeft: '10%', marginTop: '9vh', marginBottom: '9vh'}}>
                    <div onClick={this.handleSubmit}>
                      <LoginButton background='#FF6B6B' label='Registrieren'/>

                    </div>




                        <CloseButton background='#484F58' label='Abbrechen'/>

                  </div>
                </form>
              </div>
              {registering &&
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
    const { registering } = state.registration;
    const { alert } = state;

    return {
        registering,
        alertState: alert

    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
