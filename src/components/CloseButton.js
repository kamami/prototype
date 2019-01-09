import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Cancel';
import Media from "react-media";
import { history } from '../_helpers';

const styles = theme => ({
  button: {
    marginLeft: '10%',
    marginTop: 50,
    color: '#FF6B6B',
    position: 'absolute',
    right: '10%',
    boxShadow: 'none',
    borderColor: '#FF6B6B',
    borderWidth: 1.5
  },
  buttonsmall: {
    marginLeft: '10%',
    marginTop: 50,
    color: '#FF6B6B',
    position: 'absolute',
    right: '10%',
    fontSize: '0.7em',
    boxShadow: 'none',
    borderColor: '#FF6B6B',
    borderWidth: 1.5

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


  render(){
    const { classes } = this.props;




  return (
    <div>
      <Media query="(max-width: 361px)">
            {matches =>
              matches ? (
      <Button variant="outlined"  className={classes.buttonsmall}                     onClick={history.goBack}
>
      {this.props.label}
        <Close className={classes.rightIconSmall} />
      </Button>
):(
  <Button variant="outlined"  className={classes.button}                    onClick={history.goBack}
>
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
