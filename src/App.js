import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from './Pages/Homepage';
import Impressum from './Pages/Impressum';
import Browse from './Pages/Browse';







class App extends Component {


  render() {
    return (
        <Router>
          <div>
            <Route path="/" exact strict component={Browse}
            />

              <Route path="/impressum/" exact strict component={Impressum}/>
          </div>
        </Router>
    );
  }
}

export default App;
