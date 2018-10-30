import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchButton extends React.Component{



    render() {
        return (
            <div style={{marginLeft: 300, marginTop: 5}}>
          <MuiThemeProvider>
            <RaisedButton label="Search" className="Login" backgroundColor='#82f2da' labelColor='#ffffff' />
            </MuiThemeProvider>
            </div>






        )
      }
    }

export default SearchButton;
