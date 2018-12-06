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
import AppBar from '@material-ui/core/AppBar';


class Browse extends React.Component{

  constructor(props) {
       super(props);
         }

  focus = () => {
    this.textInput.focus();
  }

  onClick() {
  window.location.reload();


  }



    render() {

        return (
          <div>
              <header className="Header" style={{  textAlign: 'center' }}>
                <Drawer/>

                <ScrollToTop showUnder={-20} style={{
position: 'relative',
marginTop: 44,
cursor: 'pointer',
transitionDuration: '3s',
transitionTimingFunction: 'linear',
transitionDelay: '1s',
marginLeft: 'auto',
marginRight: 'auto'
}}>

                <div  onClick={this.onClick}>
                  <Logo />

                </div>

                  </ScrollToTop>
                  <Media query="(min-width: 600px)">
                    {matches =>
                      matches ? (
                        <Navigation />
                    ):(null)
                  }
                </Media>


                    <ScrollToTop showUnder={80}     duration={1000}
style={{
    position: 'flex',
    cursor: 'pointer',
    transitionDuration: '1s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0.5s'
    }}>
              <SearchButton />
              </ScrollToTop>



            <Media query="(min-width: 600px)">
              {matches =>
                matches ? (
                  <UserProfile />
              ):(null)
            }
          </Media>


              </header>






              <div style={{position: 'relative', width: '100%', marginBottom: 10, background: '#f6f6f6'  /*, height: '100vh'  für scrolling beim Suchen */}}>
                <ViewAll url='https://api.jsonbin.io/b/5bce2773716f9364f8c91a10/7' ref={(input) =>  this.textInput = input}/>



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
