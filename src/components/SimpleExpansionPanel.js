import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Info from '@material-ui/icons/Info';
import Input from '@material-ui/icons/Input';
import {Link} from 'react-router-dom';
import Account from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

});

class SimpleExpansionPanel extends React.Component{



render(){
  const { classes } = this.props;
  let user = JSON.parse(localStorage.getItem('user'));


  const städteList = (
    <div className={classes.list}>
      <List style={{padding: 0, marginLeft: 10}}>


      <ListItem button style={{height: 60}}>

            <ListItemText>
                Augsburg
            </ListItemText>
          </ListItem>

          <ListItem button style={{height: 60}}>

            <ListItemText>
                München
            </ListItemText>
          </ListItem>

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Nürnberg
            </ListItemText>
          </ListItem>

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Regensburg
            </ListItemText>
          </ListItem>
          <Link to="/tourwuerzburg" style={{textDecoration: 'none'}}>

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Würzburg
            </ListItemText>
          </ListItem>
        </Link>


      </List>


    </div>
  );

  return (
    <div className={classes.root} style={{overflow: 'hidden'}}>

      <ExpansionPanel style={{boxShadow: 'none', width: '99.999%'}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{height: 60}}>

          <Typography className={classes.heading} style={{useNextVariants: true}}>
              Stadtführungen
            </Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginBottom: -17, padding: 0}}>
        {städteList}

        </ExpansionPanelDetails>
      </ExpansionPanel>

      <List style={{padding: 0}}>

      <Link to="/tourwuerzburg" style={{textDecoration: 'none'}}>

        <ListItem button style={{height: 60, marginLeft: 10}}>

          <ListItemText>
            <p style={{fontFamily: 'Pacifico', color: '#00C9B7', fontSize: '1.3em'}}> Fable Select</p>

            </ListItemText>
        </ListItem>
        </Link>


      </List>

      <List style={{bottom: '0', position: 'absolute'}}>
        {user && user.token &&


        <Link to="/keys" style={{textDecoration: 'none'}}>
        <ListItem button>
        <ListItemIcon>
          <Key />
        </ListItemIcon>
        <ListItemText style={{fontSize: '0.9375rem'}}>

        Keys
        </ListItemText>
        </ListItem>
        </Link>
      }

        {user && user.token ?

        <Link to="/profile" style={{textDecoration: 'none'}}>
        <ListItem button>
        <ListItemIcon>
          <Account />

        </ListItemIcon>
        <ListItemText style={{fontSize: '0.9375rem'}}>

        Profil
        </ListItemText>
        </ListItem>
        </Link>
      :

<Link to="/login" style={{textDecoration: 'none'}}>
<ListItem button>
<ListItemIcon>
  <Input />

</ListItemIcon>
<ListItemText style={{fontSize: '0.9375rem'}}>

Login
</ListItemText>
</ListItem>
</Link>

}




        <Link to="/impressum" style={{textDecoration: 'none'}}>
        <ListItem button>
          <ListItemIcon>
            <Info />
        </ListItemIcon>
          <ListItemText style={{fontSize: '0.9375rem'}}>

              Impressum
          </ListItemText>
        </ListItem>
      </Link>




      </List>

    </div>
  );
}
}



SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
