import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/icons/Input';
import Media from "react-media";


const styles = theme => ({
  button: {
    marginTop: 50,
    color: '#ffffff'

  },
  buttonsmall:{
    marginTop: 50,
    color: '#ffffff',
    fontSize: '0.7em',
    marginBottom: 50

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

      <Media query="(max-width: 350px)">
            {matches =>
              matches ? (
      <Button variant="contained"  className={classes.buttonsmall} style={{backgroundColor: this.props.background}}>
    {this.props.label}
        <Input className={classes.rightIconSmall} />
      </Button>
    ) :(
      <Button variant="contained"  className={classes.button} style={{backgroundColor: this.props.background}}>
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
