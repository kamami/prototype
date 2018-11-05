import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Media from "react-media";


class SearchButton extends React.Component{

  constructor(props){
    super(props);

  }



    render() {
        return (

            <div>
              <Media query="(min-width: 600px)">
                {matches =>
                  matches ? (
                    <MuiThemeProvider>
                      <RaisedButton label="Search" backgroundColor='#82f2da' labelColor='#ffffff' onClick={() => this.props.triggerSubmit()}/>
                      </MuiThemeProvider>                ):(

                        <MuiThemeProvider>
                          <RaisedButton label="Search" backgroundColor='#82f2da' labelColor='#ffffff' onClick={() => this.props.triggerSubmit()}
                            style={{position: 'fixed', right: 10}}/>
                          </MuiThemeProvider>
                      )
              }
            </Media>

            </div>


        )
      }
    }

export default SearchButton;
