import React from 'react';
import '../App.css';
import Conversation from 'chat-template/dist/Conversation';
import messages from '../components/Messages';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

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
          label="schließen"
          primary={false}
          onClick={this.handleClose}
style={{color: '#82f2da'}}        />
      ];

        return (
            <MuiThemeProvider>
                <Card onClick={this.handleOpen} className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')', width: '15%', height: 175}}>
                <div className="overlay">
                    <div className="title" >{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>
                      <Dialog open={this.state.open} modal={false} actions={actions} onRequestClose={this.handleClose}>
                        <Tabs inkBarStyle={{background: '#000'}} style={{height: 600}}>
                            <Tab label="preview" value="one" style={{background: '#ffffff', fontSize: 20, color: '#000'}}>
                                <div>
                                  <Conversation messages={messages}/>
                                </div>
                            </Tab>
                            <Tab label="Story" value="two" style={{backgroundColor: '#ffffff', fontSize: 20, color: '#000'}}>
                                <div>
                                    <h2>{this.props.overview}</h2>
                                </div>
                            </Tab>
                            <Tab label="Kaufen" value="three" style={{backgroundColor: '#ffffff', fontSize: 20, color: '#000'}}>
                                <div>
                                    <h2>{this.props.score}</h2>
                                </div>
                            </Tab>
                        </Tabs>
                      </Dialog>
                </div>

                    </Card>
  </MuiThemeProvider>

        );
    }
};

export default Item;
