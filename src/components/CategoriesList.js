import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100vh',
    marginTop: '7vh'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function PinnedSubheaderList(props) {
  const { classes } = props;

  return (


    <List className={classes.root} subheader={<li />}>
    <li className={classes.listSection}>
    <ul className={classes.ul}>
    <ListSubheader style={{paddingLeft: 0, paddingRight: 0, fontSize: '2em', height: 56, color: '#FF6B6B', fontFamily: 'anton', minHeight: 56}}>Entertainment</ListSubheader>
    <Link to="/adventure" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Abenteuer </p>
    </ListItem>
    </Link>

    <Link to="/game" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}} >
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Spiele </p>
    </ListItem>
    </Link>

    <Link to="/quiz" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Quizzes </p>
    </ListItem>
    </Link>
    <Link to="/social" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Social </p>
    </ListItem>
    </Link>

    </ul>
    <ul className={classes.ul}>
    <ListSubheader style={{paddingLeft: 0, paddingRight: 0, fontSize: '2em', height: 56, color: '#00C9B7', fontFamily: 'anton'}}>Alltagshelfer</ListSubheader>
    <Link to="/news" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> News </p>
    </ListItem>
    </Link>

    <Link to="/food" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Food </p>
    </ListItem>
    </Link>

          </ul>
  </li>
  </List>

  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);
