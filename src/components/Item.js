import React from 'react';
import '../App.css';
import ListToggle from '../components/ListToggle';
import { Container, Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

class Item extends React.Component{



    render() {
        return (
            <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>

                <div className="overlay">
                    <div className="title" >{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>
                    <ListToggle />


                </div>


            </div>







        );
    }
};

export default Item;