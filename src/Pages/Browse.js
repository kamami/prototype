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
import SearchButton from '../components/SearchButton';
class Browse extends React.Component{

  constructor(props) {
       super(props);
         }

  focus = () => {
    this.textInput.focus();
  }



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

                    <ScrollToTop showUnder={80} style={{
    position: 'flex',
    marginLeft: 4,
    cursor: 'pointer',
    transitionDuration: '1s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0.5s',
    }}>
              <SearchButton triggerSubmit={this.focus}/>
              </ScrollToTop>


                  <UserProfile />


              </header>



              <div style={{position: 'relative', width: '100%', bottom: 0}}>
                <ViewAll url='//api.jsonbin.io/b/5bd1934751e8b664f2c1aa60/8' ref={(input) =>  this.textInput = input}/>

            <Footer wait={300}/>

            </div>

          </div>
        );
    }
};

export default Browse;
