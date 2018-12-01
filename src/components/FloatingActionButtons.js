import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

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

      <Fab variant="extended" aria-label="Delete" className={classes.fab} style={{background: '#B00020', color: '#ffffff', outline:'none',  fontSize: '12pt'}}>
        <ShoppingCart className={classes.extendedIcon} />
          Kaufen
      </Fab>

    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
