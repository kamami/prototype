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
import SimpleExpansionPanel from '../components/SimpleExpansionPanel';
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Drawer extends React.Component {
  state = {
    top: false,
    

  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Divider />

            <ListItem button>
              <ListItemIcon>
                <City />
            </ListItemIcon>
              <ListItemText>
                  Augsburg
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <City />
            </ListItemIcon>
              <ListItemText>
                  München
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <City />
            </ListItemIcon>
              <ListItemText>
                  Nürnberg
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <City />
            </ListItemIcon>
              <ListItemText>
                  Regensburg
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <City />
            </ListItemIcon>
              <ListItemText>
                  Würzburg
              </ListItemText>
            </ListItem>

        </List>
        <Divider />
        <List style={{bottom: '0', position: 'absolute'}}>

                                      <Link to="/impressum/" style={{textDecoration: 'none'}}>
          <ListItem button>
            <ListItemIcon>
              <Info />
          </ListItemIcon>
            <ListItemText>
                Impressum
            </ListItemText>
          </ListItem>
        </Link>

        </List>

      </div>
    );



    return (
      <div  >
          <MenuIcon style={{color: '#000', fontSize: 35, marginLeft: 10, marginTop: 12.5}} onClick={this.toggleDrawer('left', true)}/>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer('left', false)}
            style={{outline: 'none', overflow: 'hidden'}}


          >
          <div className="DrawerHeader" >
            <Logo />
          </div>
          <div>
<p style={{marginLeft: '15px', fontSize: '12pt', fontWeight: 'bold', marginTop: '20px', color: '#000'}}>
Kategorien:
</p>

          </div>
<SimpleExpansionPanel/>
          </div>
        </SwipeableDrawer>

      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);
