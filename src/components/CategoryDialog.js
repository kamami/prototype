import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Media from "react-media";
import Fade from '@material-ui/core/Fade';
import Typed from 'react-typed';
import SearchIcon from '@material-ui/icons/Search';
import { debounce} from 'lodash'
import Content from '../components/Content';
import Button from '@material-ui/core/Button';
import { history, store } from '../_helpers';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CategoriesList from '../components/CategoriesList';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';

import BackIcon from '@material-ui/icons/ArrowBack';

import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import DialogContent from '@material-ui/core/DialogContent';


class CategoryDialog extends React.Component{

constructor(props){
  super(props)
  this.state={
    dialog: true
  }
}



render() {
  const { classes } = this.props;



    return (

      <div>
      <Dialog
            open={this.props.dialogOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen
            onClose={this.closeConfirmationDialog}

            >
            <AppBar
              position="fixed"
              style={{minHeight: '56px'}}
            >
              <Toolbar  style={{background: '#ffffff', color: '#000',  minHeight: '56px'}}>


              <Typography style={{fontFamily: 'Roboto', fontSize: 20, color: '#000', useNextVariants: true, marginLeft: '2vw'}}>

            Kategorien
              </Typography>

              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDialogClose}
                style={{outline: 'none', position: 'fixed', right: 12, top: 4, zIndex: 99999}}
              >
              <Close style={{color: '#000'}} onClick={this.props.handleDialogClose}/>
              </IconButton>

              </Toolbar>
            </AppBar>
         <DialogContent>
           <div style={{ marginBottom: '38%'}} />



            <CategoriesList />

          </DialogContent>
        </Dialog>
        </div>
    )
  }
}

export default CategoryDialog;
