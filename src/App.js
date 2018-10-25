import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from './Pages/Homepage';
import Browse from './Pages/Browse';







class App extends Component {


  render() {
    return (
        <Router>
          <div>
            <Route path="/" exact strict component={Homepage}
            />

              <Route path="/browse/" exact strict component={Browse}/>


          </div>
        </Router>
    );
  }
}

export default App;
