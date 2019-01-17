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
            <div style={{overflow: 'hidden', position: 'fixed', backgroundColor: '#ffffff', top: 0, width: '100vw', height: 56}} >
              <div>
                <p style={{fontFamily: 'impact', color: '#ffffff', marginTop: 10, marginLeft: 26, fontSize: '1.4em'}}> Kategorien</p>

              </div>


 </div>
 <DialogContent style={{marginTop: '3.5vh'}}>
   <IconButton
     color="inherit"
     aria-label="Open drawer"
     onClick={this.handleDialogClose}
     style={{outline: 'none', position: 'fixed', right: 12, top: 4, zIndex: 99999}}
   >
   <Close style={{color: '#000'}} onClick={this.props.handleDialogClose}/>
   </IconButton>


            <CategoriesList />

          </DialogContent>
        </Dialog>
        </div>
    )
  }
}

export default CategoryDialog;
