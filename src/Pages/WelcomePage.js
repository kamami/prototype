import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { history } from '../_helpers';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import { authHeader } from '../_helpers';
import Credits from '@material-ui/icons/MonetizationOn';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({

  strong: {
    fontWeight: 900,
    textShadow: '1px 0 #484F58',
letterSpacing: '1px'
  }

});

class WelcomePage extends React.Component {

  constructor(props){
  super(props);
  this.state = {


  };

}




    render() {
      const { classes } = this.props;


        return (
          <div style={{ height: '100vh'}}>
            <div style={{height: 56, width: '100vw'}}>
              <Fade in={true}  timeout={2000}>

              <div  style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <Link to="/home" style={{textDecoration: 'none'}}>

                    <Typography style={{fontFamily: 'Pacifico', fontSize: '2.1em', useNextVariants: true, marginLeft: '4vw', marginTop: '4vw'}} className="logoColor">
                        Fable.
                      </Typography>
                    </Link>

              </div>
              </Fade>

            </div>

            <div style={{padding: '4vw'}}>
              <p style={{color: '#FF6B6B', textAlign: 'left', fontSize: '2.1em', fontFamily: 'Roboto', fontWeight: 'bold', lineHeight: 1.3}}> Jeden Tag ein Abenteuer.</p>
                <p style={{color: '#484F58', textAlign: 'left', fontSize: '1.3em', fontFamily: 'Roboto', lineHeight: 1.3}}> Fable hebt Chatbots auf die Ebene des Entertainments.
                  Interaktive Text-Adventures, abwechsluchsreiche Spiele, knifflige Qizzes und vieles mehr.

                </p>
                <Link to="/home" style={{textDecoration: 'none'}}>
                <Button  variant="contained"
                  style={{height: 40, width: '100%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#40E0D0', color: '#ffffff',  marginBottom: '5vh', marginTop: '5vh'}}>
                   Los geht's</Button>
                 </Link>

                 <div>

                 <img src={require("../assets/screenshot.png")} style={{width: '100%'}}/>

                 </div>

                 <div style= {{marginTop: '2vh'}}>
                <p>
                  <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #40E0D0', textDecoration: 'none'}}>
                    Gratis
                    </u>
                    <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                      &nbsp; - Ohne versteckte Kosten

                    </span>
                </p>

                <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                  Die meisten Chatbots sind komplett kostenfrei zugänglich und die gesamte App kann ohne Echtgeld genutz werden.
                </p>


                 </div>
                 <div style= {{marginTop: '2vh'}}>
                <p>
                  <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #40E0D0', textDecoration: 'none'}}>
                    Fable.Select
                    </u>
                    <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                      &nbsp; - Unsere ganzer Stolz

                    </span>
                </p>

                <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                    Die von uns handgeschriebenen Abenteuer sind das Highlight von Fable.

                    < br/> <span class={classes.strong}>Du</span> bist der Held.  <span class={classes.strong}>Du</span> bist der Protagonist.  <span class={classes.strong}>Du</span> entscheidest wie es weitergeht.

                                </p>


                 </div>
                 <div style= {{marginTop: '2vh'}}>
                <p>
                  <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #40E0D0', textDecoration: 'none'}}>
                      500 Credits

                    </u>
                    <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                      &nbsp; for Free

                    </span>
                </p>

                <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                  Du erhälst für deine kostenlose Registrierung 500 Credits gratis.
                </p>


                 </div>
                 <div style= {{marginTop: '2vh'}}>
                <p>
                  <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #40E0D0', textDecoration: 'none'}}>
                    Jeden Monat
                    </u>
                    <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                      &nbsp; Credits Nachschub

                    </span>
                </p>

                <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                    Bist du einmal angemeldet, bekommst du ganz automatisch jeden Monat weitere 250 Credits gutgeschrieben.

                                </p>


                 </div>
                 <Link to="/home" style={{textDecoration: 'none'}}>

                 <Button  variant="contained"
                   style={{height: 40, width: '100%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#40E0D0', color: '#ffffff',  marginBottom: '5vh', marginTop: '5vh'}}>
                    Los geht's</Button>
                  </Link>

            </div>

            <div style={{width: '100%', backgroundColor: '#ffffff'}}>

              <div style={{paddingTop: '3vh'}}>
              <img src={require("../assets/BotsforMessenger.png")} style={{width: '100%'}}/>

              </div>

              <p style={{color: '#484F58', textAlign: 'left', fontSize: '1.1em', fontFamily: 'Roboto', lineHeight: 1.3, marginTop: '5vh', padding: '4vw'}}>
                Du kannst sofort loslegen, alles was du brauchst ist ein Konto bei Facebook, um Zugriff auf den Messenger zu haben. < br /> < br />Wir empfehlen daher die Installation der Messenger-App auf deinem mobilen Endgerät.
              </p>
              <div style={{padding: '4vw'}}>
                <Button  variant="contained"
                  style={{height: 40, width: '100%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#0084ff', color: '#ffffff',  marginBottom: '3vh'}}>
                  <img src={require("../assets/facebookicon.png")} style={{height: 22, with: 22, marginRight: 20}} alt="facebookicon"/>

                   Hier geht's zum Download</Button>
              </div>



            </div>
            <div style={{marginTop: '2vh', marginBottom: '5vh'}}>
              <p style={{color: '#FF6B6B', textAlign: 'left', fontSize: '2.1em', fontFamily: 'Roboto', fontWeight: 'bold', lineHeight: 1.3, padding: '4vw'}}> Immer und überall.</p>

                <div style={{padding: ' 0 4vw 0 4vw'}}>
               <p>
                 <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #FF6B6B', textDecoration: 'none'}}>
                   Mobile Nutzung
                   </u>
                   <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                     &nbsp; von überall

                   </span>
               </p>

               <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                 Fable kannst du von jedem mobilen Endgerät und sogar von deinem Desktop-PC aus nutzen. Egal ob im Zug, Wartezimmer oder von deiner Couch aus.
               </p>


                </div>

                <div style={{padding: ' 0 4vw 0 4vw'}}>
               <p>
                 <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #FF6B6B', textDecoration: 'none'}}>
                   Kaum Datenvolumen
                   </u>
                   <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                     &nbsp; nötig

                   </span>
               </p>

               <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                 Die App von Fable ist sehr sparsam mit deinem Datenvolumen und auch die Chatbots im Messenger arbeiten sehr effizient.
               </p>


                </div>

                <div style={{padding: ' 0 4vw 0 4vw'}}>
               <p>
                 <u style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58', boxShadow: 'inset 0 -6px 0 #FF6B6B', textDecoration: 'none'}}>
                   Datenschutz
                   </u>
                   <span style={{fontFamily: 'anton', fontSize: '1.4em', color: '#484F58'}}>
                     &nbsp; ist Ehrensache

                   </span>
               </p>

               <p style={{fontFamily: 'Roboto', fontSize: '1.1em', color: '#484F58', lineHeight: 1.3, marginTop: -10}}>
                Deine Daten sind bei uns absolut sicher. Der Messenger greift nur auf Informationen zu, die du in Facebook öffentlich gemacht hast.
               </p>


                </div>


            </div>

            <div style={{padding: '4vw', backgroundColor: '#00C9B7'}}>

              <Link to="/home" style={{textDecoration: 'none'}}>
              <Button  variant="contained"
                style={{height: 40, width: '100%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#ffffff', color: '#00C9B7',  marginBottom: '4vh', marginTop: '3vh'}}>
                 Los geht's</Button>
             </Link>
            <List style={{padding: 0}}>
              <Link to="/login" style={{textDecoration: 'none'}}>

                <ListItem button  style={{fontFamily: 'Roboto', fontSize: '1em', color: '#ffffff', height: 45}}>
                  Login
                </ListItem>
              </Link>

                <Divider style={{backgroundColor: '#ffffff'}}/>
                  <Link to="/register" style={{textDecoration: 'none'}}>

                <ListItem button  style={{fontFamily: 'Roboto', fontSize: '1em', color: '#ffffff', height: 45}}>
                  Signup
                </ListItem>
              </Link>

                <Divider style={{backgroundColor: '#ffffff'}}/>
                  <Link to="/impressum" style={{textDecoration: 'none'}}>

                <ListItem button  style={{fontFamily: 'Roboto', fontSize: '1em', color: '#ffffff', height: 45}}>
                  Impressum
                </ListItem>
              </Link>
            </List>
          </div>


          </div>
        );
    }
}

WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(WelcomePage);
