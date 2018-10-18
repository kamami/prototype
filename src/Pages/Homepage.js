import React from 'react';
import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ScrollToTop from 'react-scroll-up';
import Content from '../components/Content';


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
  transitionDelay: '1s'
}}>
                    <Logo />
                    </ScrollToTop>

                    <Navigation />
                    <div id="search" className="Search">
    <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Nach Titel suchen..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile />

                </header>
                <Hero/>


                <Content/>
                <Footer/>

            </div>
        );
    }
};

export default Homepage;
