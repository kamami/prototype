import React from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Navigation extends React.Component {

render() {
        return (
            <div id="navigation" className="Navigation">

                <nav>
                    <ul>

                            <Link to="/browse/" style={{textDecoration: 'none', color: '#000'}}>  <MuiThemeProvider>
                              <FlatButton label="Browse" onClick={this.handleOpen} className="Login" hoverColor='#63fff7'/>
                              </MuiThemeProvider>
                            </Link>
                            <MuiThemeProvider>
                            <FlatButton label="Meine Liste" onClick={this.handleOpen} className="Login" hoverColor='#63fff7'/>
                            </MuiThemeProvider>
                            <MuiThemeProvider>
                            <FlatButton label="Verlauf" onClick={this.handleOpen} className="Login" hoverColor='#63fff7'/>
                            </MuiThemeProvider>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
