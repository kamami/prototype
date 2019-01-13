import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ViewAll from '../components/ViewAll';
import Logo from '../Logo.js';
import ScrollToTop from 'react-scroll-up';
import SearchButton from '../components/SearchButton';
import SimpleExpansionPanel from '../components/SimpleExpansionPanel';
import Fade from '@material-ui/core/Fade';
import CollapsibleAppBar from '../components/CollapsibleAppBar';
import {Link} from 'react-router-dom';
import IosSnackbar from '../components/IosSnackbar';


const drawerWidth = '50%';

const styles = theme => ({



  root: {
    display: 'flex',
  },

  drawer: {
    width: '50%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '50%',
    overflow: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#00C9B7',

  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '-50%',
    padding: 0

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,

    }),
    marginLeft: 0,


  },
});

class Homepage extends React.Component {

  constructor(props){
      super(props);
      this.state={
        open: false
      }
      this.copy = this.copy.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

 copy(){
   this.setState({
     copied: true
   })
 }





  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>


        {this.state.open === false &&


      <CollapsibleAppBar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} pageTitle={"Fable."}/>
}

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <div style={{width: '100%'}}>
            <Link to="/home" style={{textDecoration: 'none'}}>

                  <p style={{fontFamily: 'Pacifico', fontSize: '1.5em', marginTop: 'auto', marginBottom: 'auto', marginLeft: '4vw', color: '#ffffff'}}>
                    Fable.
                  </p>
                  </Link>
            </div>
            <IconButton onClick={this.handleDrawerClose} style={{outline: 'none'}}>
              <ScrollToTop showUnder={-20} duration={1000}
                    style={{
                    position: 'flex',
                    cursor: 'pointer',
                    transitionDuration: '1s',
                    transitionTimingFunction: 'linear',

                    }}>
                <ChevronLeftIcon style={{color: '#ffffff'}}/>
                </ScrollToTop>
            </IconButton>
          </div>

            <SimpleExpansionPanel/>


        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >

            <div style={{position: 'relative', width: '100%', marginBottom: 10 }} onScroll={this.updateDimensions}>

              <ViewAll url='https://questdb.herokuapp.com/all?_page=' ref={(input) =>  this.textInput = input} drawerOpen={this.state.open} category={""} />
          </div>

        </main>

      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Homepage);
