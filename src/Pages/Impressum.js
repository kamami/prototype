import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Footer from '../components/Footer';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';



class Impressum extends React.Component{





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


          <UserProfile />


      </header>
      <div style={{position: 'fixed', width: '100%', bottom: 0}}>

      <div style={{ marginLeft: 150, marginBottom: 130, height: 200}}>
        <p style={{fontSize: 30, fontFamily: 'Anton'}}>Impressum</p>
        <p style={{fontSize: 20}}> Martin Seubert</p>
        <p style={{fontSize: 20}}> Leitengraben 3</p>
        <p style={{fontSize: 20}}> 97084 Würzburg</p>
        <p style={{fontSize: 20}}> mail@martinseubert.de</p>

      </div>
      <Footer/>
      </div>
    </div>
  )
}
}

export default Impressum;
