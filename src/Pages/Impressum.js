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
import SearchButton from '../components/SearchButton';
import Media from "react-media";
import Drawer from '../components/Drawer';


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
      <header className="Header" style={{  textAlign: 'center' }}>
        <Drawer />

        <ScrollToTop showUnder={-20} style={{
  position: 'relative',
  marginTop: 46,
  cursor: 'pointer',
  transitionDuration: '3s',
  transitionTimingFunction: 'linear',
  transitionDelay: '1s',
  marginLeft: 'auto',
  marginRight: 'auto'
  }}>
  <Link to="/browse/" style={{textDecoration: 'none'}}>

  <Logo />
  </Link>

          </ScrollToTop>
          <Media query="(min-width: 600px)">
            {matches =>
              matches ? (
                <Navigation />
            ):(null)
          }
        </Media>






    <Media query="(min-width: 600px)">
      {matches =>
        matches ? (
          <UserProfile />
      ):(null)
    }
  </Media>


      </header>
      <div style={{textAlign: 'center', width: '100%'}}>

      <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 200}}>
        <p style={{fontSize: 40, fontFamily: 'Anton', marginBottom: 100}}>Impressum</p>
        <p style={{fontSize: 30}}> Martin Seubert</p>
        <p style={{fontSize: 30}}> Leitengraben 3</p>
        <p style={{fontSize: 30}}> 97084 Würzburg</p>
        <p style={{fontSize: 30}}> mail@martinseubert.de</p>

      </div>

                      <Media query="(min-width: 600px)">
                        {matches =>
                          matches ? (
                            <Footer wait={1000}/>
                        ):(null)
                      }
                    </Media>
      </div>
    </div>
  )
}
}




export default Impressum;
