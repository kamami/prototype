import React from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Navigation extends React.Component {

render() {
        return (


                    <ul>

                            <Link to="/browse/" style={{textDecoration: 'none'}}>  <MuiThemeProvider>
                              <RaisedButton label="Browse" className="Login" backgroundColor='#82f2da' labelColor='#ffffff' />
                              </MuiThemeProvider>
                            </Link>


                    </ul>

        );
    }
}

export default Navigation;
