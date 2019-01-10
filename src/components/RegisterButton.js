import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Key from '@material-ui/icons/VpnKey';
import Media from "react-media";

const styles = theme => ({
  button: {
    marginLeft: '10%',
    color: '#FF6B6B',
    position: 'absolute',
    right: '10%',
    boxShadow: 'none',
    borderColor: '#FF6B6B',
    borderWidth: 1.5,
    height: 40


  },
  buttonsmall: {
    marginLeft: '10%',
    color: '#FF6B6B',
    position: 'absolute',
    right: '10%',
    fontSize: '0.7em',
    boxShadow: 'none',
    borderColor: '#FF6B6B',
    borderWidth: 1.5,
    height: 40



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
    fontSize: '1.2em'
  },
  iconSmall: {
    fontSize: 20,
  },
});

class RegisterButton extends React.Component{

  render(){
    const { classes } = this.props;




  return (
    <div>
      <Media query="(max-width: 361px)">
            {matches =>
              matches ? (
      <Button  className={classes.buttonsmall} variant="outlined" >
      {this.props.label}
        <Key className={classes.rightIconSmall}  />
      </Button>
):(

  <Button className={classes.button}  variant="outlined" >
  {this.props.label}
    <Key className={classes.rightIcon} />
  </Button>
)}
</Media>
    </div>
  );
}
}

RegisterButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RegisterButton);
