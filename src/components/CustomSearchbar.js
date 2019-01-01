import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import classNames from 'classnames';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

function CustomSearchbar(props) {
  const { classes } = props;

  return (
    <div>
      <IconButton className={classes.iconButton} aria-label="Menu" onClick={this.props.handleDrawerOpen}
      className={classNames(classes.menuButton, this.props.open && classes.hide)}
      style={{outline: 'none'}}>
        <MenuIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="Search Google Maps" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>

    </div>
  );
}

CustomSearchbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomSearchbar);
