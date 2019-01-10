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
import CheckIcon from '@material-ui/icons/CheckCircle';

const tutorialSteps = [
  {

    id: 1
  },
  {

    id: 2
  },
  {

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
  backgroundColor: '#FF6B6B',
  boxShadow: 'none'
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
this.updateKeys();

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
    console.log(this.props.matchId)

}

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let user = JSON.parse(localStorage.getItem('user'));

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

    {tutorialSteps[activeStep].id === 1 &&

      <div>
      {this.props.select ?
        <div>
          {user && user.token ?
            <div>
              <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '4vw', marginTop: '5vh'}}>
        Um den Bot in vollem Umfang genießen zu können, benötigst du einen Key.
        Gib deinen Key direkt im Messenger ein, sobald du dazu aufgefordert wirst.

        </p>

        <Button  variant="contained" style={{ height: 40, width: '90%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#FF6B6B', color: '#ffffff',  marginBottom: '7vh', marginTop: '5vh'}}
          onClick={this.handleNext}>
          <CheckIcon style={{marginRight: '2%'}}/>
          Verstanden</Button>

         </div>

         :

         <div>
           <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '0 4vw 0 4vw', marginTop: '5vh'}}>
        Bitte logge dich ein oder eröffne ein Konto:

        </p>
        <div className="form-group" style={{display: 'flex', marginLeft: '10%', marginBottom: '7vh', marginTop: '5vh'}}>

         <div onClick={this.toLogin}>
           <LoginButton background='#FF6B6B' label='Login'/>

         </div>


        <div onClick={this.toRegister}>
                <RegisterButton background='#484F58' label='Registrieren'/>
        </div>
        </div>
           </div>
           }
        </div>

:

<div>
  {user && user.token ?
    <div>
      <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '4vw', marginTop: '5vh'}}>
Dieser Bot kostet keine Credits, du kannst sofort loslegen!

</p>

<div className="form-group" style={{ marginBottom: '7vh', marginTop: '5vh'}}>
  <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>

  <Button variant="contained" style={{height: 40, backgroundColor: '#0084ff', width: '90%',
    color: '#ffffff', boxShadow: 'none', borderRadius: "2em 2em 2em 2em"}}>

  Messenger

  <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}}/>
  </Button>
</a>


</div>
 </div>

 :

 <div>
   <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '0 4vw 0 4vw', marginTop: '5vh', textAlign: 'left'}}>
     Dieser Bot kostet keine Credits, du kannst sofort loslegen!
     < br/>

 </p>
 <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '0 4vw 0 4vw', textAlign: 'left'}}>

     Möchtest du dich trotzdem einloggen oder ein Konto eröffnen?

</p>


<div className="form-group" style={{display: 'flex', marginLeft: '10%', marginBottom: '7vh', marginTop: '5vh'}}>

 <div onClick={this.toLogin}>
   <LoginButton background='#FF6B6B' label='Login'/>

 </div>


<div onClick={this.toRegister}>
        <RegisterButton background='#484F58' label='Registrieren'/>
</div>
</div>
   </div>
   }

</div>

      }

    </div>
    }
    {tutorialSteps[activeStep].id === 2 &&
      <div>
        {this.props.credits >= 20 ?
          <div>
            <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '4vw', marginTop: '5vh'}}>
        Dein Guthaben wird mit 20 Credits belastet:
    </p>

    <Button  variant="contained" style={{height: 40, width: '90%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#FF6B6B', color: '#ffffff',  marginBottom: '7vh', marginTop: '5vh'}} onClick={this.buyFinal}>
          <Key style={{marginRight: '2%'}}/>
            Key erhalten</Button>
        </div>
          :
          <div>
            <p style={{fontFamily: 'roboto', fontSize: '1em', color: '#484F58', padding: '4vw', marginTop: '10%', marginBottom: '7vh'}}>
                           Du verfügst nicht über genügend Credits.</p>
          </div>
        }

        </div>

    }

    {tutorialSteps[activeStep].id === 3 &&
      <div>
        <div>

              <p style={{fontFamily: 'roboto', fontSize: '1.1em', color: '#484F58', padding: '4vw', marginTop: '5vh', marginBottom: '7vh'}}>
                Hier ist dein Key:
                  </p>


                    <div style={{marginBottom: '7vh', marginTop: '5vh'}}>
                          <CopyToClipboard text={this.props.code}
                            onCopy={this.props.copy}>
                            <Button variant="contained" style={{ height: 40, width: '90%', boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', background: '#FF6B6B', color: '#ffffff'}}>

                              {this.props.code}

                              <FileCopy style={{color: '#ffffff', right: 10, position: 'absolute'}}/>
                            </Button>
                          </CopyToClipboard>
                          <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>

                            <p style={{fontFamily:'roboto', color: 'grey', position: 'absolute', right: '5%', fontSize: '0.8em'}}>
                              (Klicken um den Key zu kopieren)
                            </p>

                            </div>
                          </div>

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
