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


  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Media query="(max-width: 350px)">
            {matches =>
              matches ? (
                <Fab color="primary" aria-label="Add" className={classes.fab}
        style={{background: '#FF6B6B', color: '#ffffff', outline:'none',
          float: 'right', marginBottom: '4vw', position: 'fixed', bottom: 0}}>
        <Key className={classes.extendedIcon} />
      </Fab>
    ) : (
      <Fab color="primary" aria-label="Add" className={classes.fab}
        style={{background: '#FF6B6B', color: '#ffffff', outline:'none',
          float: 'right',  marginBottom: '4vw', position: 'fixed', bottom: 0, right: 'calc(4vw - 6px)'}}>
        <Key className={classes.extendedIcon} />
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
