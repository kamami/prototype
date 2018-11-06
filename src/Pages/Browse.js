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
import Headline from '../components/Headline';
import Media from "react-media";
import Drawer from '../components/Drawer';

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
                <Drawer />

                <ScrollToTop showUnder={-20} style={{
position: 'relative',
marginTop: 60,
marginLeft: 'auto',
marginRight: 'auto',
cursor: 'pointer',
transitionDuration: '2s',
transitionTimingFunction: 'linear',
transitionDelay: '1s'
}}>

                  <Logo />

                  </ScrollToTop>
                  <Media query="(min-width: 600px)">
                    {matches =>
                      matches ? (
                        <Navigation />
                    ):(null)
                  }
                </Media>


                    <ScrollToTop showUnder={80} style={{
    position: 'flex',
    cursor: 'pointer',
    transitionDuration: '1s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0.5s'
    }}>
              <SearchButton triggerSubmit={this.focus}/>
              </ScrollToTop>



            <Media query="(min-width: 600px)">
              {matches =>
                matches ? (
                  <UserProfile />
              ):(null)
            }
          </Media>


              </header>



              <div style={{position: 'relative', width: '100%', marginBottom: 10}}>
                <ViewAll url='//api.jsonbin.io/b/5bd1934751e8b664f2c1aa60/13' ref={(input) =>  this.textInput = input}/>



            </div>

                <Media query="(min-width: 600px)">
                  {matches =>
                    matches ? (
                      <Footer wait={1000}/>
                  ):(null)
                }
              </Media>


          </div>
        );
    }
};

export default Browse;
