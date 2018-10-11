import React from 'react';
import '../App.css';
import ListToggle from '../components/ListToggle';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Item extends React.Component{



    render() {
        return (
            <MuiThemeProvider>
                <Card className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')', width: '15%', height: 175}}>

                <div className="overlay">
                    <div className="title" >{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>


                </div>


                    </Card>
</MuiThemeProvider>






        );
    }
};

export default Item;