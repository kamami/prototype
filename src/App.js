import React, { Component } from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from './Pages/Homepage';
import Impressum from './Pages/Impressum';
import Browse from './Pages/Browse';
import {LoginPage} from './Pages/LoginPage';
import {Profile} from './Pages/Profile';
import {RegisterPage} from './Pages/RegisterPage';
import { connect } from 'react-redux';
import { history } from './_helpers';
import {alertActions}   from './_actions';
import { PrivateRoute } from './_components';









class App extends Component {
  constructor(props) {
        super(props);

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
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
          <div>
            <Route path="/" exact strict component={Homepage}
            />

              <Route path="/impressum" exact strict component={Impressum}/>

                <Route path="/browse" exact strict component={Browse}/>
                  <Route path="/login" exact strict component={LoginPage}/>
                    <Route path="/register" exact strict component={RegisterPage}/>
                      <Route path="/profile" exact strict component={Profile}/>



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
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
