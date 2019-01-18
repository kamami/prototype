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
  },
  listSection: {
    backgroundColor: 'inherit'
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
      <Link to="/home" style={{textDecoration: 'none'}}>
        <ListItem style={{padding: 0, fontSize: '2em', color: '#FF6B6B', fontFamily: 'anton', lineHeight: 1.7}}>Trending</ListItem>
        </Link>

        <Link to="/home" style={{textDecoration: 'none'}}>
        <ListItem style={{padding: 0, fontSize: '2em', color: '#00C9B7', fontFamily: 'anton', lineHeight: 1.7}}>Neuheiten</ListItem>
        </Link>
    <ListSubheader style={{paddingLeft: 0, paddingRight: 0, fontSize: '2em', color: '#484F58', fontFamily: 'anton', lineHeight: 1.7}}>Entertainment</ListSubheader>
    <Link to="/adventure" style={{textDecoration: 'none'}}>

    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
            <p style={{fontFamily: 'roboto', color: '#000', fontSize: '1.5em', marginBottom: 0}}> Quests </p>
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
    <ListSubheader style={{paddingLeft: 0, paddingRight: 0, fontSize: '2em', color: '#40E0D0', fontFamily: 'anton', lineHeight: 1.7}}>Alltagshelfer</ListSubheader>
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
