import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Input from '@material-ui/icons/Input';
import green from '@material-ui/core/colors/green';


const styles = theme => ({
  button: {
    marginTop: 50,
    color: '#ffffff'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

function LoginButton(props) {
  const { classes } = props;
  return (
    <div>

    <MuiThemeProvider theme={theme}>

      <Button variant="contained"  className={classes.button} color="primary" >
      Login
        <Input className={classes.rightIcon} />
      </Button>
      </MuiThemeProvider>

    </div>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
