import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import FloatingActionButtons from '../components/FloatingActionButtons.js';
import ProgressMobileStepper from '../components/ProgressMobileStepper.jsx';

const styles = {
  list: {
    width: '100%',


  },
  fullList: {
    width: 'auto',

  },
};

class DrawerBottom extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    bottom: false,


    };
  }


  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {




   const fullList = (
     <div style={{display: 'flex', height: "45vh"}}>
       <div style={{marginLeft: 'auto', marginRight: 'auto', width: '100%'}}>
         <ProgressMobileStepper credits={this.props.credits} matchId={this.props.matchId} updateCredits={this.props.updateCredits} code={this.props.code}/>



       </div>


     </div>
   );

   return (
     <div>


        <div onClick={this.toggleDrawer('bottom', true)}>
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
