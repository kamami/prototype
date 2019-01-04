import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Key from '@material-ui/icons/VpnKey';
import Media from "react-media";
const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Media query="(max-width: 350px)">
            {matches =>
              matches ? (
      <Fab variant="extended" aria-label="Delete" className={classes.fab} style={{background: '#B00020', color: '#ffffff', outline:'none', width: '46vw', fontSize: '0.7em', float: 'right'}}>
        <Key className={classes.extendedIcon} />
            Key erhalten
      </Fab>
    ) : (
      <Fab variant="extended" aria-label="Delete" className={classes.fab} style={{background: '#B00020', color: '#ffffff', outline:'none', width: '46vw', float: 'right'}}>
        <Key className={classes.extendedIcon} />
            Key erhalten
      </Fab>

    )}
  </Media>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
