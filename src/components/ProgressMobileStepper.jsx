import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TextField from 'material-ui/TextField';
import RadioButtonsGroup from '../components/RadioButtonsGroup';
import { connect } from 'react-redux';
import { userService } from '../_services';
import Input from '@material-ui/icons/Input';
import {Link} from 'react-router-dom';
import { history } from '../_helpers';

const tutorialSteps = [
  {
    headline: 'Wie ist dein Name?',
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
  },
];

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    paddingTop: 5
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

 textField: {

   width: '80%',
   marginBottom: 100,
   size: 30
 },
 dense: {
   marginTop: 19,
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
    };


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





  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let user = JSON.parse(localStorage.getItem('user'));

    return (

      <div className={classes.root} style={{textAlign: 'center', width: '100%'}}>

      <MobileStepper
      variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1} style={{outline: 'none'}}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={this.handleBack} disabled={activeStep === 0} style={{outline: 'none'}}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
        classes={{
       root: classes.root, // class name, e.g. `classes-nesting-root-x`
     }}
      />

    <p style={{fontSize: '2em', marginTop: 30, fontFamily: 'Anton'}}>
          {tutorialSteps[activeStep].headline}
    </p>


    {tutorialSteps[activeStep].id == 1 &&
      <MuiThemeProvider >
        <TextField
             hintText={tutorialSteps[activeStep].placeholder1}
             type="Text"
             onChange={this.handleChange('vorname')}
             value={this.state.vorname}
             underlineFocusStyle={{borderColor: '#B00020',
    borderWidth: 2}}
             underlineStyle={{borderColor: '#B00020', borderWidth:
    1, top: '45px'}}
             hintStyle={{fontSize: 20, color: 'rgba(0,0,0,0.7)'}}
             inputStyle={{fontSize: 20, color: '#000'}}
             style={{caretColor: '#B00020', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 40, marginTop: 30 }}
             />
             <TextField
                  hintText={tutorialSteps[activeStep].placeholder2}
                  type="Text"
                  onChange={this.handleChange('nachname')}
                  value={this.state.nachname}
                  underlineFocusStyle={{borderColor: '#B00020',
         borderWidth: 2}}
                  underlineStyle={{borderColor: '#B00020', borderWidth:
         1, top: '45px'}}
                  hintStyle={{fontSize: 20,  color: 'rgba(0,0,0,0.7)'}}
                  inputStyle={{fontSize: 20,  color: '#000'}}
                  style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginBottom: 50 }}
                  />
         </MuiThemeProvider>
    }
    {tutorialSteps[activeStep].id == 2 &&


        <RadioButtonsGroup />

    }
    {tutorialSteps[activeStep].id == 3 &&
      <div>
            {user && user.token ?
      <Button style={{backgroundColor: 'green', color: '#ffffff'}} onClick={this.props.updateCredits}> Kaufen </Button>
      :

        <Button style={{backgroundColor: 'green', color: '#ffffff'}} onClick={this.toLogin} > Login </Button>

      }
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
