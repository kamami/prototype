import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Key from '@material-ui/icons/VpnKey';

const styles = theme => ({
  button: {
    marginLeft: '10%',
    marginTop: '8%',
    color: '#ffffff',
    position: 'absolute',
    right: '10%',
    width: '80%'
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

class FacebookLoginButton extends React.Component{

  constructor(props) {
      super(props);
    }

  render(){
    const { classes } = this.props;




  return (
    <div>
      <Button variant="contained"  className={classes.button} style={{backgroundColor: this.props.background}} >
      {this.props.label}
      <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}}/>
      </Button>

    </div>
  );
}
}

FacebookLoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(FacebookLoginButton);
