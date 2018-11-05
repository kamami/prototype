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
                  <Media query="(min-width: 600px)">
                    {matches =>
                      matches ? (
                        <Navigation />
                    ):(null)
                  }
                </Media>


                    <ScrollToTop showUnder={80} style={{
    position: 'flex',
    marginLeft: 4,
    cursor: 'pointer',
    transitionDuration: '1s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0.5s'
    }}>
              <SearchButton triggerSubmit={this.focus}/>
              </ScrollToTop>

              <Media query="(min-width: 1200px)">
                {matches =>
                  matches ? (
                <Headline/>
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



              <div style={{position: 'relative', width: '100%', bottom: 0}}>
                <ViewAll url='//api.jsonbin.io/b/5bd1934751e8b664f2c1aa60/13' ref={(input) =>  this.textInput = input}/>



            </div>
              <Footer wait={500}/>

          </div>
        );
    }
};

export default Browse;
