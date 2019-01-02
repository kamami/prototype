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
import Close from '@material-ui/icons/Cancel';
import Media from "react-media";

const styles = theme => ({
  button: {
    marginLeft: '10%',
    marginTop: 50,
    color: '#ffffff',
    position: 'absolute',
    right: '10%'
  },
  buttonsmall: {
    marginLeft: '10%',
    marginTop: 50,
    color: '#ffffff',
    position: 'absolute',
    right: '10%',
    fontSize: '0.7em'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
    fontSize: '1.4em'
  },
  rightIconSmall: {
    marginLeft: theme.spacing.unit,
    fontSize: '1.3em'
  },
  iconSmall: {
    fontSize: 20,
  },
});

class CloseButton extends React.Component{

  constructor(props) {
      super(props);
    }

  render(){
    const { classes } = this.props;




  return (
    <div>
      <Media query="(max-width: 350px)">
            {matches =>
              matches ? (
      <Button variant="contained"  className={classes.buttonsmall} style={{backgroundColor: this.props.background}} >
      {this.props.label}
        <Close className={classes.rightIconSmall} />
      </Button>
):(
  <Button variant="contained"  className={classes.button} style={{backgroundColor: this.props.background}} >
  {this.props.label}
    <Close className={classes.rightIcon} />
  </Button>

) }
</Media>
    </div>
  );
}
}

CloseButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CloseButton);
