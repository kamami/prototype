import React from 'react';

import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import TitleList from '../components/TitleList';
import Footer from '../components/Footer';
import ScrollToTop from 'react-scroll-up';



/////////////////
/// COMPONENTS //
/////////////////

// Container

class Homepage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      searchUrl: ""
    }
  }




     handleKeyUp(e){
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm;
            this.setState({searchUrl:searchUrl});
        }
    }

   handleChange(e){
        this.setState({searchTerm : e.target.value});
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
  transitionDelay: '2s'
}}>
                    <Logo />
                    </ScrollToTop>

                    <Navigation />
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Nach Titel suchen..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile />

                </header>
                <Hero />

                <TitleList title="Suchergebnisse" url={this.state.searchUrl} />
                <TitleList title="Die Beliebtesten Chatbots" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                <TitleList title="Trending" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
                <TitleList title="Am meisten gespielte Städtetouren" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                <TitleList title="Gute Nacht Geschichten" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
                <TitleList title="Interaktive Spannung auf der Couch" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                <Footer/>
            </div>
        );
    }
};

export default Homepage;
