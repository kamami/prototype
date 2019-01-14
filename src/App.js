import React, { Component } from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from './Pages/Homepage';
import Impressum from './Pages/Impressum';
import {LoginPage} from './Pages/LoginPage';
import {Profile} from './Pages/Profile';
import {RegisterPage} from './Pages/RegisterPage';
import { connect } from 'react-redux';
import { history } from './_helpers';
import {alertActions}   from './_actions';
import { PrivateRoute } from './_components';
import ProductPage from './Pages/ProductPage';
import FableSelect from './Pages/FableSelect';
import Quiz from './Pages/Quiz';
import Abenteuer from './Pages/Abenteuer';
import Games from './Pages/Games';
import DrinkingGames from './Pages/DrinkingGames';
import WelcomePage from './Pages/WelcomePage';
import IosSnackbar from './components/IosSnackbar';

import {KeysPage} from './Pages/KeysPage';

class App extends Component {
  constructor(props) {
        super(props);
          this.state={
            open: true,
            changeRoute: false
          }
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    componentDidMount(){

      const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) || (window.navigator.standalone);

    if('standalone' in window.navigator || window.navigator.standalone){
      this.setState({ changeRoute: true });
      console.log("Standalone")

    }

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
    }
    }


  render() {
    return (
      <div >
                <div className="container">
                    <div>
                        <Router history={history}>
          <div>

            <Route path="/" exact strict component={WelcomePage} />
        
            <Route path="/home" exact strict component={Homepage}/>

              <Route path="/impressum" exact strict component={Impressum}/>

                  <Route path="/login" exact strict component={LoginPage}/>
                    <Route path="/register" exact strict component={RegisterPage}/>
                      <PrivateRoute path="/profile" exact strict component={Profile}/>
                          <Route path="/fableselect" exact strict component={FableSelect}/>
                            <Route path="/keys" exact strict component={KeysPage}/>
                              <Route path="/quiz" exact strict component={Quiz}/>
                                <Route path="/adventure" exact strict component={Abenteuer}/>
                                  <Route path="/game" exact strict component={Games}/>
                                    <Route path="/drinking_game" exact strict component={DrinkingGames}/>

                                <Route path="/bots/:id" exact strict component={ProductPage}/>



          </div>
        </Router>
      </div>
            </div>
            {this.state.showInstallMessage &&
            <IosSnackbar />
            }
        </div>
    );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alertState: alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
