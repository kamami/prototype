

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
import Media from "react-media";
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Fade from '@material-ui/core/Fade';





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

class Impressum extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };




  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
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

            <div style={{marginTop: 'auto', marginBottom: 'auto', height: 28}}>
<p style={{fontFamily: 'Lobster', fontSize: 36, color: '#B00020'}}>

  Romeo

</p>
            </div>
          </Link>


</Fade>




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
            <IconButton onClick={this.handleDrawerClose}               style={{outline: 'none'}}
>
              {theme.direction === 'ltr' ? <ChevronLeftIcon
 /> : <ChevronRightIcon              />}
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
            <div style={{textAlign: 'center', width: '100%', }}>

              {this.state.open == false &&
                <Fade in={!this.state.open} timeout={1500}>
                  <div style={{  marginTop: 150}}>
                    <p style={{fontSize: 40, fontFamily: 'Anton', marginBottom: 100}} >Impressum</p>
                    <p style={{fontSize: 30}}> Martin Seubert</p>
                    <p style={{fontSize: 30}}> Leitengraben 3</p>
                    <p style={{fontSize: 30}}> 97084 Würzburg</p>
                    <p style={{fontSize: 30}}> mail@martinseubert.de</p>

                  </div>


                </Fade>


          }
          {this.state.open == true &&

            <Fade in={this.state.open}  timeout={1000}>

        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 150}}>
          <p style={{fontSize: 30, fontFamily: 'Anton', marginBottom: 70}} >Impressum</p>
          <p style={{fontSize: 18}}> Martin Seubert</p>
          <p style={{fontSize: 18}}> Leitengraben 3</p>
          <p style={{fontSize: 18}}> 97084 Würzburg</p>
          <p style={{fontSize: 18}}> mail@martinseubert.de</p>

        </div>
      </Fade>


      }

                            <Media query="(min-width: 600px)">
                              {matches =>
                                matches ? (
                                  <Footer wait={1000}/>
                              ):(null)
                            }
                          </Media>
            </div>
        </main>
      </div>
    );
  }
}

Impressum.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Impressum);
