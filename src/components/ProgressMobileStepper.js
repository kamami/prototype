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

const tutorialSteps = [
  {
    headline: 'Wie ist dein Name?',
    placeholder1: "Vorname",
    placeholder2: "Nachname",
      label: 'Name'
  },
  {
    headline: 'Bird',
    placeholder: "z.B. maxmustermann@gmail.com",
      label: 'Email'
  },
  {
    headline: 'Bali, Indonesia',
    placeholder: "z.B. 18",
      label: 'Alter'
  },

];

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff'

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
   flexWrap: 'wrap',

 },
 textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: '80%',
   marginBottom: 100,
   size: 30
 },
 dense: {
   marginTop: 19,
 },
 menu: {
   width: 200,
 },

});

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
    };

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


  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (

      <div className={classes.root} style={{textAlign: 'center'}}>
      <MobileStepper
      variant="progress"
      style={{background: '#ffffff', width: '100vw'}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
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
      />


      <MuiThemeProvider>
        <TextField
             hintText={tutorialSteps[activeStep].placeholder1}
             type="Text"
             onChange={this.handleChange('name')}
             value={this.state.name}
             underlineFocusStyle={{borderColor: '#B00020',
    borderWidth: 2}}
             underlineStyle={{borderColor: '#B00020', borderWidth:
    1, top: '45px'}}
             hintStyle={{fontSize: 25, fontFamily: 'Anton', color: 'rgba(0,0,0,0.9)'}}
             inputStyle={{fontSize: 25, fontFamily: 'Anton', color: '#000'}}
             ref={(input) => { this.textInput = input; }}
             style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginBottom: 50, marginTop: 50 }}
             />
             <TextField
                  hintText={tutorialSteps[activeStep].placeholder2}
                  type="Text"
                  onChange={this.handleChange('name')}
                  value={this.state.name}
                  underlineFocusStyle={{borderColor: '#B00020',
         borderWidth: 2}}
                  underlineStyle={{borderColor: '#B00020', borderWidth:
         1, top: '45px'}}
                  hintStyle={{fontSize: 25, fontFamily: 'Anton', color: 'rgba(0,0,0,0.9)'}}
                  inputStyle={{fontSize: 25, fontFamily: 'Anton', color: '#000'}}
                  ref={(input) => { this.textInput = input; }}
                  style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginBottom: 50 }}
                  />
         </MuiThemeProvider>

      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
