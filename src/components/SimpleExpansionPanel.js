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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import City from '@material-ui/icons/LocationCity';
import Info from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import Couch from '@material-ui/icons/AirlineSeatIndividualSuite';


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

function SimpleExpansionPanel(props) {
  const { classes } = props;

  const städteList = (
    <div className={classes.list}>
      <List style={{padding: 0}}>
      <Divider />

      <ListItem button style={{height: 60}}>

            <ListItemText>
                Augsburg
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button style={{height: 60}}>

            <ListItemText>
                München
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Nürnberg
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Regensburg
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button style={{height: 60}}>

            <ListItemText>
                Würzburg
            </ListItemText>
          </ListItem>

      </List>


    </div>
  );

  return (
    <div className={classes.root}>

      <ExpansionPanel style={{boxShadow: 'none', width: '99.999%'}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{height: 60}}>
          <Typography className={classes.heading}>
          <City style={{color: 'grey', marginRight: 30, marginLeft: -10}}/>
Stadtführungen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginBottom: -17, padding: 0}}>
        {städteList}

        </ExpansionPanelDetails>
      </ExpansionPanel>

      <List style={{padding: 0}}>
<Divider />
      <Link to="/impressum/" style={{textDecoration: 'none'}}>

        <ListItem button style={{height: 60}}>
          <ListItemIcon>
            <Couch />
        </ListItemIcon>
          <ListItemText>
              Von der Couch aus
          </ListItemText>
        </ListItem>
        </Link>
      

      </List>

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
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
