import React from 'react';

import Logo from '../Logo.js';
import '../App.css';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import TitleList from '../components/TitleList';



/////////////////
/// COMPONENTS //
/////////////////

// Container
var Homepage = React.createClass({

    apiKey: '87dfa1c669eea853da609d4968d294be',
    getInitialState: function() {
        return {searchTerm:"", searchUrl:""};
    },
     handleKeyUp :function(e){
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
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
                <TitleList title="Die Beliebtesten Chatbots" url='discover/tv?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending" url='discover/movie?sort_by=popularity.desc&page=1' />
                <TitleList title="Am meisten gespielte Städtetouren" url='genre/27/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Gute Nacht Geschichten" url='genre/878/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Interaktive Spannung auf der Couch" url='genre/35/movies?sort_by=popularity.desc&page=1' />
            </div>
        );
    }
});

export default Homepage;
