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
import Paper from 'material-ui/Paper';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
};

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
                <Card onClick={this.handleOpen} className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')', height: 175}}>
                <div className="overlay">
                    <div className="title" >{this.props.title}</div>
                    <div className="rating">{this.props.score} / 10</div>
                    <div className="plot">{this.props.overview}</div>
                      <Dialog
                        contentStyle={customContentStyle}
                        open={this.state.open} modal={false}
                        actions={actions} onRequestClose={this.handleClose}>
                        <div style={{display: 'flex'}}>
                                <div>
                                  <Paper zDepth={2} style={{  width: '250px',
                                    height: '250px', borderRadius: '20%'}}>
                                    <img className="DetailImg" src={this.props.backdrop}/>
                                    </Paper>
                                </div>
                        <div style={{float: 'right', marginLeft: 20, fontWeight: 'bold'}}>
                          <h4>
                              {this.props.title}
                          </h4>
                          <p>
                            Hinzufügen zu:
                          </p>

                          <p>
                            Preview:
                          </p>
                          <div style={{width: 600}}>
                          <Conversation messages={messages}/>
                          </div>
                        </div>
                      </div>

                      </Dialog>
                </div>
                </Card>
          </MuiThemeProvider>

        );
    }
};

export default Item;
