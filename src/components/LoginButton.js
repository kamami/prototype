import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/icons/Input';
import Media from "react-media";


const styles = theme => ({
  button: {
    color: '#ffffff',
    boxShadow: 'none',
    borderWidth: 1.5,
    borderColor: '#FF6B6B',
    height: 40

  },
  buttonsmall:{
    color: '#ffffff',
    fontSize: '0.7em',
    boxShadow: 'none',
    borderWidth: 1.5,
    borderColor: '#FF6B6B',
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
    fontSize: '1.3em'
  },
  iconSmall: {
    fontSize: 20,
  },
});



class LoginButton extends React.Component{

  render(){
    const { classes } = this.props;
  return (
    <div>

      <Media query="(max-width: 361px)">
            {matches =>
              matches ? (
      <Button variant="outlined"  className={classes.buttonsmall} style={{backgroundColor: this.props.background}}>
    {this.props.label}
        <Input className={classes.rightIconSmall} />
      </Button>
    ) :(
      <Button variant="outlined"  className={classes.button} style={{backgroundColor: this.props.background}}>
    {this.props.label}
        <Input className={classes.rightIcon} />
      </Button>

    ) }
        </Media>
    </div>
  );
}
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
