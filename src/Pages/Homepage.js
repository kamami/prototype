import React from 'react';
import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ScrollToTop from 'react-scroll-up';
import Content from '../components/Content';
import Headline from '../components/Headline';

class Homepage extends React.Component{

  constructor(props){
    super(props);

  }

    render() {
        return (
            <div>
                <header className="Header">
                  <ScrollToTop showUnder={-20} duration={3000} style={{
  position: 'relative',
  marginTop: 45,
  marginLeft: 40,
  cursor: 'pointer',
  transitionDuration: '2s',
  transitionTimingFunction: 'linear',
  transitionDelay: '1s',
}}>
                    <Logo />
                    </ScrollToTop>

                    <Navigation />

                  <Headline/>

                    <UserProfile />

                </header>
                <ScrollToTop showUnder={-20}  style={{
position: 'relative',
marginTop: 49,
cursor: 'pointer',
transitionDuration: '2s',
transitionTimingFunction: 'linear',
transitionDelay: '1s'
}}>
                <Hero url='//api.jsonbin.io/b/5bce2773716f9364f8c91a10/4'/>
                </ScrollToTop>

                <Content wait={500}/>
                <Footer wait={500}/>

            </div>
        );
    }
};

export default Homepage;
