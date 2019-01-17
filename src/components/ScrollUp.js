import React from 'react';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Key from '@material-ui/icons/VpnKey';
import Media from "react-media";
import SearchIcon from '@material-ui/icons/Search';
import IosSnackbar from '../components/IosSnackbar';
import classNames from 'classnames';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    zIndex: 999
  },
  extendedIcon: {


  },

  fab: {
   position: 'absolute',
   bottom: theme.spacing.unit * 2,
   right: theme.spacing.unit * 2,
   zIndex: 999
 },
 fabMoveUp: {
   transform: 'translate3d(0, -46px, 0)',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.enteringScreen,
     easing: theme.transitions.easing.easeOut,
   }),
 },
 fabMoveDown: {
   transform: 'translate3d(0, 0, 0)',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.leavingScreen,
     easing: theme.transitions.easing.sharp,
   }),
 },

});


class ScrollUp extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0,
        openSnackbar: true

    };

      this.onClick = this.onClick.bind(this)

  }


  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openSnackbar: false });
  };

  componentDidMount(){

    const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) || (window.navigator.standalone);




  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
  }
  }


  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId})


  }




onClick() {

  this.props.handleDrawerClose();
  this.scrollToTop();

       setTimeout(() => {
           this.props.focus()
       }, 1000);
   }




  render () {
    const { classes } = this.props;
    const fabClassName = classNames(classes.fab, this.state.openSnackbar&&this.state.showInstallMessage ? classes.fabMoveUp : classes.fabMoveDown);

      return (

        <div>
              <Fab color="primary" aria-label="Add" className={fabClassName}
           style={{background: '#FF6B6B', color: '#ffffff', outline:'none',
             float: 'right',  marginBottom: '4vw', position: 'fixed', bottom: 0, right: 'calc(4vw - 6px)'}} onClick={this.onClick}>

           <SearchIcon className={classes.extendedIcon}  />
         </Fab>

         {this.state.showInstallMessage &&
         <IosSnackbar  handleClose={this.handleClose} open={this.state.openSnackbar}/>
         }
       </div>
            )

}

}
ScrollUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollUp);
