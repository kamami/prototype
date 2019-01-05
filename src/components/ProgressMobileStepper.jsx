import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { history } from '../_helpers';
import Key from '@material-ui/icons/VpnKey';
import FileCopy from '@material-ui/icons/FileCopy';
import { authHeader } from '../_helpers';

import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CustomSnackbar from '../components/CustomSnackbar';

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
    copied: false,
    snackbarOpen: false
        };
this.buyFinal = this.buyFinal.bind(this);
this.updateKeys = this.updateKeys.bind(this);

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
this.setState({snackbarOpen: true})
this.updateKeys();

}

snackbarClose(){
  this.setState({snackbarOpen: false})
}


updateKeys() {
  let user = JSON.parse(localStorage.getItem('user'));
  var requestUrl = 'https://mighty-atoll-75521.herokuapp.com/users/';
  var id = user._id
  fetch(requestUrl + id, {
      method: 'put',
      headers: {
        ...authHeader(),
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({[this.props.matchId]: this.props.code})
    })
}

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let user = JSON.parse(localStorage.getItem('user'));

    return (

      <div style={{textAlign: 'center', width: '100%'}}>

        <CustomSnackbar snackbarOpen={this.state.snackbarOpen} />

      <MobileStepper
      variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

        classes={{
       root: classes.root, // class name, e.g. `classes-nesting-root-x`
     }}
      />



    {tutorialSteps[activeStep].id === 1 &&




      <div>
        {user && user.token ?
          <div>
        <p style={{fontFamily: 'roboto', fontSize: '1em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
      Um den Bot in vollem Umfang genießen zu können, benötigst du einen Key.
      Gib deinen Key direkt im Chatfenster ein, sobald du dazu aufgefordert wirst.

    </p>

    <Button  className={classes.button} variant="contained" onClick={this.handleNext}> Verstanden</Button>

       </div>

       :

       <div>
         <p style={{fontFamily: 'roboto', fontSize: '1em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
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
    {tutorialSteps[activeStep].id === 2 &&
      <div>
    <p style={{fontFamily: 'roboto', fontSize:'1em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
        Dein Guthaben wird mit 20 Credits belastet:
    </p>

        <Button className={classes.button} variant="contained" onClick={this.buyFinal}>
          <Key style={{marginRight: '2%'}}/>
            Key erhalten</Button>



        </div>

    }

    {tutorialSteps[activeStep].id === 3 &&
      <div>
        <div>

              <p style={{fontFamily: 'roboto', fontSize: '1.1em', color: 'grey', marginLeft: '2%', marginRight: '2%', marginTop: '7%', fontWeight: 'bold'}}>
                Hier ist dein Key:
                  </p>


                    <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                      <div>

                          <CopyToClipboard text={this.props.code}
                            onCopy={() => this.setState({copied: true})}>
                            <Button className={classes.button} variant="contained" >

                              {this.props.code}

                              <FileCopy style={{color: '#ffffff',right: 10, position: 'absolute'}}/>
                            </Button>
                          </CopyToClipboard>

                      </div>








     </div>



      </div>
      <p style={{fontFamily:'roboto', color: 'grey'}}>
        (Klicken um den Key zu kopieren)
      </p>
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
