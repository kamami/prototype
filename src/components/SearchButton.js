import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchButton extends React.Component{

  constructor(props){
    super(props);

  }



    render() {
        return (

            <div>
          <MuiThemeProvider>
            <RaisedButton label="Search" backgroundColor='#82f2da' labelColor='#ffffff' onClick={() => this.props.triggerSubmit()}/>
            </MuiThemeProvider>
            </div>


        )
      }
    }

export default SearchButton;
