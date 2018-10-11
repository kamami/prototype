import React, { Component } from "react";
import '../App.css';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import {Link} from 'react-router-dom';





export default class Browse extends React.Component{



    render() {

        return (
                <div className="Title">
                    <header className="Header">
                        <Link to="/">                    <Logo/>
                        </Link>

                        <Navigation />

                        <UserProfile />

                    </header>


                </div>




        );
    }
}

