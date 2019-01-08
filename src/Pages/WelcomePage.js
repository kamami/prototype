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


class WelcomePage extends React.Component {

  constructor(props){
  super(props);
  this.state = {


  };

}




    render() {


        return (
          <div>

          </div>
        );
    }
}



const connectedHomePage = connect(mapStateToProps)(WelcomePage);
export { connectedHomePage as WelcomePage };
