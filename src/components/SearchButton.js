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
                      <RaisedButton label="Search" backgroundColor='#B00020' labelColor='#ffffff'
                        style={{marginTop: 15}}/>
                      </MuiThemeProvider>                ):(


                            <SearchIcon style={{color: '#000', fontSize: 25, position: 'fixed', margin: 16, right: 0, top: 0}}/>
                      )
              }
            </Media>

            </div>


        )
      }
    }

export default SearchButton;
