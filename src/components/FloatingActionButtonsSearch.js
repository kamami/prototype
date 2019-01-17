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
import ScrollUp from '../components/ScrollUp'

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

<ScrollUp scrollStepInPx="50" delayInMs="16.66" focus={this.props.focus}/>
    </div>
  );
}
}

FloatingActionButtonsSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtonsSearch);
