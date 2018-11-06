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
                      <RaisedButton label="Search" backgroundColor='#82f2da' labelColor='#ffffff' onClick={() => this.props.triggerSubmit()}
                        style={{marginTop: 15}}/>
                      </MuiThemeProvider>                ):(


                          <IconButton onClick={() => this.props.triggerSubmit()}>
                            <SearchIcon style={{color: '#82f2da', fontSize: 45, position: 'fixed', right: 15, marginTop: 22 }}/>
                          </IconButton>
                      )
              }
            </Media>

            </div>


        )
      }
    }

export default SearchButton;
