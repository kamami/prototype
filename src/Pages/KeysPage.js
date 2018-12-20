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
import KeyList from '../components/KeyList';
class KeysPage extends React.Component {



    render() {

        return (
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

            <Typography style={{fontFamily: 'Roboto', fontSize: 20, color: '#000'}}>

          Keys
            </Typography>

            </Toolbar>
          </AppBar>
          <div style={{height: '100vh', background: '#ffffff'}}>
            <KeyList />
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

const connectedKeysPage = connect(mapStateToProps)(KeysPage);
export { connectedKeysPage as KeysPage };
