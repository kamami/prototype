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
import SimpleExpansionPanel from '../components/SimpleExpansionPanel';
import Media from "react-media";
import {Link} from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import CustomTabs from '../components/CustomTabs';



const styles = theme => ({
  root: {
    display: 'flex'
    },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    width: '50%',
    marginLeft: '50%',
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
    width: '50%',
    flexShrink: 0
  },
  drawerPaper: {
    width: '50%',
    overflowX: 'hidden'

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

            <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
              <Typography style={{fontFamily: 'Devonshire', fontSize: 40, color: '#B00020'}}>

                Genkō

              </Typography>
            </div>
          </Link>


</Fade>



          </Toolbar>
          {this.state.open === false &&
            <CustomTabs open={this.state.open}/>

          }




        </AppBar>
        {this.state.open === true &&

        <div style={{textAlign: 'right', width: '100%', right: 10, position: 'absolute'}}>
          <Media query="(max-width: 376px)">
                {matches =>
                  matches ? (
            <Fade in={!this.props.open} timeout={1500}>
              <div style={{marginTop: 66}}>
                <p style={{fontSize: 20, fontFamily: 'Anton', marginBottom: 20}} >Impressum</p>
                <p style={{fontSize: 13, fontFamily: 'Roboto', marginBottom: 0}}> Martin Seubert</p>
                <p style={{fontSize: 13, fontFamily: 'Roboto', marginBottom: 0}}> Leitengraben 3</p>
                <p style={{fontSize: 13, fontFamily: 'Roboto', marginBottom: 0}}> 97084 Würzburg</p>
                <p style={{fontSize: 13, fontFamily: 'Roboto', marginBottom: 0}}> mail@genko.de</p>

              </div>


            </Fade>
) : (

  <Fade in={!this.props.open} timeout={1500}>
    <div style={{marginTop: 66}}>
      <p style={{fontSize: 25, fontFamily: 'Anton', marginBottom: 20}} >Impressum</p>
      <p style={{fontSize: 15, fontFamily: 'Roboto', marginBottom: 0}}> Martin Seubert</p>
      <p style={{fontSize: 15, fontFamily: 'Roboto', marginBottom: 0}}> Leitengraben 3</p>
      <p style={{fontSize: 15, fontFamily: 'Roboto', marginBottom: 0}}> 97084 Würzburg</p>
      <p style={{fontSize: 15, fontFamily: 'Roboto', marginBottom: 0}}> mail@genko.de</p>

    </div>


  </Fade>
)
}
</Media>



        </div>
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
