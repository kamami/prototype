import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Media from "react-media";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

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
                      <RaisedButton label="Search" backgroundColor='#82f2da' labelColor='#ffffff'
                        style={{marginTop: 15}}/>
                      </MuiThemeProvider>                ):(


                          <IconButton>
                            <SearchIcon style={{color: '#000', fontSize: 45, position: 'fixed', right: 12, marginTop: 25 }}/>
                          </IconButton>
                      )
              }
            </Media>

            </div>


        )
      }
    }

export default SearchButton;
