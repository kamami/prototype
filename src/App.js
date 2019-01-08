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
import TourWuerzburg from './Pages/TourWuerzburg';
import {KeysPage} from './Pages/KeysPage';

class App extends Component {
  constructor(props) {
        super(props);
          this.state={
            open: true
          }
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

  render() {
    return (
      <div >
                <div className="container">
                    <div>

                        <Router history={history}>
          <div>
            <Route path="/" exact strict component={Homepage}
            />

              <Route path="/impressum" exact strict component={Impressum}/>

                  <Route path="/login" exact strict component={LoginPage}/>
                    <Route path="/register" exact strict component={RegisterPage}/>
                      <PrivateRoute path="/profile" exact strict component={Profile}/>
                          <Route path="/tourwuerzburg" exact strict component={TourWuerzburg}/>
                            <Route path="/keys" exact strict component={KeysPage}/>
                            <Route path="/product" exact strict component={ProductPage} />
                              <Route path="/bots/:id" exact strict component={ProductPage}/>



          </div>
        </Router>
      </div>
            </div>
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
