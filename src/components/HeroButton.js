import React from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HeroButton extends React.Component{
    render() {
        return (

          <Link to={this.props.to} style={{textDecoration: 'none'}}>
            <MuiThemeProvider>
            <RaisedButton label={this.props.text} className="Login" backgroundColor={this.props.background} labelColor={this.props.label} />
            </MuiThemeProvider>
          </Link>

        );
    }
}

export default HeroButton;
