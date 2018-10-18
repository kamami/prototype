import React from 'react';
import '../App.css';
import ListToggle from '../components/ListToggle';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
class Item extends React.Component{
  constructor(props){
     super(props);
     this.state = {
         open: false
     }
   }
   handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };




    render() {

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onClick={this.handleClose}
        />,
      ];

        return (
            <MuiThemeProvider>

                <Card onClick={this.handleOpen} className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')', width: '15%', height: 175}}>

                <div className="overlay">
                    <div className="title" >{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>
                      <Dialog open={this.state.open} modal={false} actions={actions} onRequestClose={this.handleClose}>
                        <div className="title" >{this.props.title}</div>

                      </Dialog>
                </div>

                    </Card>



            </MuiThemeProvider>

        );
    }
};

export default Item;
