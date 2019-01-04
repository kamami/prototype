import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import Facebook from '../components/Facebook';


class ProfilePage extends React.Component {
  
componentDidMount() {
}


    render() {

        return (

            <div >
              <AppBar
                position="fixed"

              >
                <Toolbar  style={{background: '#ffffff', color: '#000',       maxHeight: '56px'
      }}>

      <Link to="/">

                  <IconButton

                    style={{outline: 'none', color: '#000'}}
                  >
                    <BackIcon />
                  </IconButton>
                </Link>
                <Typography style={{fontFamily: 'Roboto', fontSize: 20, color: '#000'}}>

              Login mit Facebook
                </Typography>
                </Toolbar>
              </AppBar>

              <Facebook />

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.authentication;
    return {
        isLoggedIn
    };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
