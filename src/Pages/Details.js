import React, { Component } from "react";
import '../App.css';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';


var Details = React.createClass({


    render() {

        return (
            <div id="details">
                <header className="Header">
                    <Link to="/">                    <Logo/>
                    </Link>

                    <Navigation />

                    <UserProfile />

                </header>
                <Hero />



                <div class="fb-customerchat"
                     page_id="1272308332800038">
                </div>

</div>
        );
    }
});

export default Details;
