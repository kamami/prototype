import React from 'react';

import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import TitleList from '../components/TitleList';
import Footer from '../components/Footer';



/////////////////
/// COMPONENTS //
/////////////////

// Container
var Homepage = React.createClass({

    getInitialState: function() {
        return {searchTerm:"", searchUrl:""};
    },
     handleKeyUp :function(e){
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm;
            this.setState({searchUrl:searchUrl});
        }
    },

   handleChange : function(e){
        this.setState({searchTerm : e.target.value});
    },



    render: function() {
        return (
            <div>
                <header className="Header">
                    <Logo />
                    <Navigation />
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Nach Titel suchen..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile />

                </header>
                <Hero />

                <TitleList title="Suchergebnisse" url={this.state.searchUrl} />
                <div>
                <TitleList title="Die Beliebtesten Chatbots" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                </div>
                <TitleList title="Trending" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
                <TitleList title="Am meisten gespielte Städtetouren" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                <TitleList title="Gute Nacht Geschichten" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
                <TitleList title="Interaktive Spannung auf der Couch" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
                <Footer/>
            </div>
        );
    }
});

export default Homepage;
