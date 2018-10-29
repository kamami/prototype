import React, { Component } from "react";
import '../App.css';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Footer from '../components/Footer';
import ViewAll from '../components/ViewAll';

class Browse extends React.Component{


    render() {

        return (
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



              <ViewAll url='//api.jsonbin.io/b/5bd1934751e8b664f2c1aa60/8'/>

            <Footer/>

          </div>
        );
    }
};

export default Browse;
