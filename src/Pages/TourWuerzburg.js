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
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const drawerWidth = 411.2 / 2;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    width: `calc(100vw - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
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

class TourWuerzburg extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  onClick() {
  window.location.reload();


  }


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open} style={{background: '#ffffff', color: '#000',       maxHeight: '56px'
}}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
              style={{outline: 'none'}}
            >
              <MenuIcon />
            </IconButton>
            <Fade in={true}  timeout={2000}>

            <Link to="/" style={{textDecoration: 'none'}}>

          <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <Typography style={{fontFamily: 'Devonshire', fontSize: 40, color: '#B00020'}}>

              Genkō

            </Typography>
          </div>
        </Link>

</Fade>

            <ScrollToTop showUnder={80}     duration={1000}
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
            <IconButton onClick={this.handleDrawerClose} style={{outline: 'none'}}>
              <ScrollToTop showUnder={-20}     duration={1000}
  style={{
  position: 'flex',
  cursor: 'pointer',
  transitionDuration: '1s',
  transitionTimingFunction: 'linear',

  }}>
                <ChevronLeftIcon/>
                </ScrollToTop>
            </IconButton>
          </div>
          <Divider />
            <SimpleExpansionPanel/>


        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            <div style={{position: 'relative', width: '100%', marginBottom: 10, background: '#f6f6f6'  /*, height: '100vh'  für scrolling beim Suchen */}}>
              <ViewAll url='https://questdb.herokuapp.com' ref={(input) =>  this.textInput = input} drawerOpen={this.state.open}/>
          </div>
        </main>
      </div>
    );
  }
}

TourWuerzburg.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TourWuerzburg);
