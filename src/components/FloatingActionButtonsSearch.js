import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Key from '@material-ui/icons/VpnKey';
import Media from "react-media";
import SearchIcon from '@material-ui/icons/Search';
import ScrollToTop from 'react-scroll-up';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    zIndex: 999
  },
  extendedIcon: {


  },
});



class FloatingActionButtonsSearch extends React.Component{



render(){
  const { classes } = this.props;
  return (
    <div>

      <Fab color="primary" aria-label="Add" className={classes.fab}
        style={{background: '#FF6B6B', color: '#ffffff', outline:'none',
          float: 'right',  marginBottom: '4vw', position: 'fixed', bottom: 0, right: 'calc(4vw - 6px)'}}>

        <SearchIcon className={classes.extendedIcon} onClick={this.props.focus}/>
      </Fab>

    </div>
  );
}
}

FloatingActionButtonsSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtonsSearch);
