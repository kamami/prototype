import React from 'react';
import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ScrollToTop from 'react-scroll-up';
import Content from '../components/Content';

class Homepage extends React.Component{

  constructor(props){
    super(props);

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

                    <UserProfile />

                </header>
                <Hero url='//api.jsonbin.io/b/5bce2773716f9364f8c91a10/4'/>

                <Content/>
                <Footer/>

            </div>
        );
    }
};

export default Homepage;
