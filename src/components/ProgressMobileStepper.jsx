import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import RadioButtonsGroup from '../components/RadioButtonsGroup';
import { connect } from 'react-redux';
import { userService } from '../_services';
import Input from '@material-ui/icons/Input';
import {Link} from 'react-router-dom';
import { history } from '../_helpers';
import Key from '@material-ui/icons/VpnKey';
import FileCopy from '@material-ui/icons/FileCopy';

import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const tutorialSteps = [
  {
    headline: 'Gute Wahl!',
    placeholder1: "Vorname",
    placeholder2: "Nachname",
    label: 'Name',
    id: 1
  },
  {
    headline: 'Key per Email oder SMS?',

    id: 2
  },
  {
    headline: 'Wie möchtest du zahlen?',

    id: 3
  }

];

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    paddingTop: 5,
    },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: '#ffffff',

  },


  container: {
   display: 'flex',
   flexWrap: 'wrap'
 },


 button: {
  margin: theme.spacing.unit,
  width: '90%',
  color: '#ffffff',
  backgroundColor: 'green'
},





});

class ProgressMobileStepper extends React.Component {

  constructor(props){
    super(props);
  this.state = {
    activeStep: 0,
    vorname: '',
    nachname: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    value: '',
      copied: false
        };
this.buyFinal = this.buyFinal.bind(this);


  }


  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

toLogin(){
  history.push('/login');
}


toRegister(){
  history.push('/register');
}

buyFinal(){
this.props.updateCredits();
this.setState(prevState => ({
  activeStep: prevState.activeStep + 1,
}));

}






  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let user = JSON.parse(localStorage.getItem('user'));
    var message = "Hello World"

    return (

      <div style={{textAlign: 'center', width: '100%'}}>

      <MobileStepper
      variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

        classes={{
       root: classes.root, // class name, e.g. `classes-nesting-root-x`
     }}
      />



    {tutorialSteps[activeStep].id == 1 &&




      <div>
        {user && user.token ?
          <div>
        <p style={{fontFamily: 'roboto', fontSize: '1.2em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
      Um den Bot in vollem Umfang genießen zu können, benötigst du einen Key.
      Gib deinen Key direkt im Chatfenster ein, sobald du dazu aufgefordert wirst.

    </p>

    <Button  className={classes.button} variant="contained" onClick={this.handleNext}> Verstanden</Button>

       </div>

       :

       <div>
         <p style={{fontFamily: 'roboto', fontSize: '1.2em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
Bitte logge dich ein oder eröffne ein Konto.

     </p>
     <div className="form-group" style={{display: 'flex', marginLeft: '10%'}}>

       <div onClick={this.toLogin}>
         <LoginButton background='green' label='Login'/>

       </div>


 <div onClick={this.toRegister}>
              <RegisterButton background='#B00020' label='Registrieren'/>
      </div>
     </div>
         </div>
         }
       </div>



    }
    {tutorialSteps[activeStep].id == 2 &&
      <div>
    <p style={{fontFamily: 'roboto', fontSize:'1.2em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
        Dein Guthaben wird mit 20 Credits belastet:
    </p>

        <Button className={classes.button} variant="contained" onClick={this.buyFinal}>
          <Key style={{marginRight: '2%'}}/>
            Key erhalten</Button>



        </div>

    }

    {tutorialSteps[activeStep].id == 3 &&
      <div>
        <div>

          <p style={{fontFamily: 'Roboto', fontSize: '1.35em', color: '#B00020', fontWeight: 'bold', marginTop: '10%'}}> Danke für deine Unterstützung :)</p>
              <p style={{fontFamily: 'roboto', fontSize: '1.3em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '7%'}}>
                Hier ist dein Key:
                  </p>


                    <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                      <div>

                          <CopyToClipboard text="123456789"
                            onCopy={() => this.setState({copied: true})}>
                            <Button className={classes.button} variant="contained" >

                                1234-5678-9

                              <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                            </Button>
                          </CopyToClipboard>
                      </div>







     </div>


      </div>
      <div style={{marginTop: '5%'}}>
        {this.state.copied ? <span style={{fontFamily: 'Roboto', fontSize: '1em', color: 'green', fontWeight: 'bold', marginTop: 50}}>Erfolgreich kopiert!</span> : null}

      </div>
      </div>

    }






      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
