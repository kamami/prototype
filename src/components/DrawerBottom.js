import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import City from '@material-ui/icons/LocationCity';
import Info from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../Logo.js';
import FloatingActionButtons from '../components/FloatingActionButtons.js';
import ProgressMobileStepper from '../components/ProgressMobileStepper.js';

const styles = {
  list: {
    width: '100%',


  },
  fullList: {
    width: 'auto',

  },
};

class DrawerBottom extends React.Component {
  state = {

  bottom: false,


  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
   const { classes } = this.props;



   const fullList = (
     <div style={{display: 'flex', height: "100vw"}}>
       <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
         <ProgressMobileStepper />



       </div>


     </div>
   );

   return (
     <div>

        <div onClick={this.toggleDrawer('bottom', true)} style={{width: 100}}>
        <FloatingActionButtons />

        </div>

       <SwipeableDrawer
         anchor="bottom"
         open={this.state.bottom}
         onClose={this.toggleDrawer('bottom', false)}
         onOpen={this.toggleDrawer('bottom', true)}
       >
         <div
           tabIndex={0}
           role="button"
           style={{ outline: 'none'}}

         >
           {fullList}
         </div>
       </SwipeableDrawer>

     </div>
   );
 }
}

DrawerBottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerBottom);
