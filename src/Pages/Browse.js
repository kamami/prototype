import React, { Component } from "react";
import '../App.css';
import Logo from '../Logo.js';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



export default class Browse extends React.Component{



    render() {

        return (
            <div id="details">
                <header className="Header">
                    <Link to="/">                    <Logo/>
                    </Link>

                    <Navigation />

                    <UserProfile />

                </header>
                <div style={{marginTop: 200}}>

                        </div>

            </div>
        );
    }
}

