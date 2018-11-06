import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Footer from '../components/Footer';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Headline from '../components/Headline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class Impressum extends React.Component{


  state = {
     open: false,
   };

   handleClickOpen = () => {
     this.setState({ open: true });
   };

   handleClose = () => {
     this.setState({ open: false });
   };




render(){


  return(

    <div>
      <header className="Header">
        <ScrollToTop showUnder={-20} style={{
position: 'relative',
marginTop: 45,
marginLeft: 40,
cursor: 'pointer',
transitionDuration: '2s',
transitionTimingFunction: 'linear',
transitionDelay: '1s'
}}>

          <Logo />

          </ScrollToTop>

          <Navigation />

          <Headline/>

          <UserProfile />


      </header>
      <div style={{position: 'fixed', width: '100%', bottom: 0}}>

      <div style={{ marginLeft: 150, marginBottom: 130}}>
        <p style={{fontSize: 40, fontFamily: 'Anton'}}>Impressum</p>
        <p style={{fontSize: 30}}> Martin Seubert</p>
        <p style={{fontSize: 30}}> Leitengraben 3</p>
        <p style={{fontSize: 30}}> 97084 Würzburg</p>
        <p style={{fontSize: 30}}> mail@martinseubert.de</p>

      </div>
      <div>
      <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>

      <Footer/>
      </div>
    </div>
  )
}
}




export default Impressum;
