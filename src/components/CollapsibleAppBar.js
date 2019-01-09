import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { history } from '../_helpers';

import MenuIcon from '@material-ui/icons/Menu';

import classNames from 'classnames';

import ScrollToTop from 'react-scroll-up';

import SearchButton from '../components/SearchButton';
import Fade from '@material-ui/core/Fade';

const styles = {
  root: {
   flexGrow: 1
 },

 shadow :{
   background: 'rgba(255, 255, 255, 1)',
   boxShadow: '0 0 0 4px rgba(255,255,255,1), 0 6px 4px rgba(0,0,0,0.4)',
   borderRadius: '0px 0px 42px 42px'


 },
 noShadow: {
   background: 'rgba(255, 255, 255, 1)',
   boxShadow: 'none'

 },
 show: {
   transform: "translate(0, 0)",
   transition: "transform 1s",


 },
 hide: {
   transform: "translate(0, -70px)",
   transition: "transform 2s",
 },


menuButton: {
  marginLeft: 12,
  marginRight: 20,
},

};



class CollapsibleAppBar extends React.PureComponent {
  constructor(props) {
     super(props);

     this.state = {
       shouldShow: null,
     };

     this.lastScroll = null;
     this.updateDimensions = this.updateDimensions.bind(this);

     this.handleScroll = this.handleScroll.bind(this);
     // Alternatively, you can throttle scroll events to avoid
     // updating the state too often. Here using lodash.
     // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
   }

   componentDidMount() {
     this.updateDimensions();

     window.addEventListener('scroll', this.handleScroll, { passive: true });
     window.addEventListener('scroll', this.updateDimensions);

   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
   }

   updateDimensions() {
     this.setState({ heightSet: window.scrollY })
}

   handleScroll() {
     const lastScroll = window.scrollY;

     if (lastScroll === this.state.lastScroll) {
       return;
     }

     const shouldShow =
       this.lastScroll !== null ? lastScroll < this.lastScroll : null;

     if (shouldShow !== this.state.shouldShow) {
       this.setState(prevState => ({
         ...prevState,
         shouldShow,
       }));
     }

     this.lastScroll = lastScroll;
   }

   getScrollClassName() {
     if (this.state.shouldShow === null) {
       return '';
     }
      else if(this.state.shouldShow === false && this.state.heightSet > 100){
        return this.props.classes.hide;

      } else {
        return this.props.classes.show;

      }

   }

   getShadow(){
     if(this.state.heightSet < 48){
        return this.props.classes.noShadow;
     } else {
        return this.props.classes.shadow;
     }

   }

   onClick() {
history.push('/')

   }


  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="fixed"
        className={classNames(`${classes.root}, ${this.getScrollClassName()}`, `${this.getShadow()}`,
            {[classes.appBarShift]: this.props.open}
          )}

      >


      <Toolbar disableGutters={!this.props.open } style={{color: '#000'}}>
         <IconButton
           color="inherit"
           aria-label="Open drawer"
           onClick={this.props.handleDrawerOpen}
           className={classNames(classes.menuButton, this.props.open && classes.hide)}
           style={{outline: 'none'}}
         >
           <MenuIcon />
         </IconButton>
         <Fade in={true}  timeout={2000}>

         <div  onClick={this.onClick} style={{marginTop: 'auto', marginBottom: 'auto'}}>
               <Typography style={{fontFamily: 'Pacifico', fontSize: '2.1em', useNextVariants: true}} className="logoColor">

                 {this.props.pageTitle}
               </Typography>
         </div>

         </Fade>

         <ScrollToTop showUnder={49}     duration={1000}
                 style={{
                 position: 'flex',
                 cursor: 'pointer',
                 transitionDuration: '1s',
                 transitionTimingFunction: 'linear',
                 transitionDelay: '0.5s',

                 }}>

   <SearchButton />
   </ScrollToTop>
       </Toolbar>
      </AppBar>
    );
  }
}

CollapsibleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsibleAppBar);
