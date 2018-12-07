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
    marginTop: 50,
    background: '#B00020',
    color: '#ffffff',
    position: 'absolute',
    right: '10%'
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

function RegisterButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained"  className={classes.button} >
      Registrieren
        <Key className={classes.rightIcon} />
      </Button>

    </div>
  );
}

RegisterButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterButton);
