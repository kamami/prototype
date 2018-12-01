import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';

const tutorialSteps = [
  {
    headline: 'Wie ist dein Name?',
    placeholder: "z.B. Max Mustermann",
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
    backgroundColor: '#ffffff',

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
   marginBottom: 100
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

        <TextField
        id="standard-name"
        label={tutorialSteps[activeStep].label}
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="normal"
        placeholder	={tutorialSteps[activeStep].placeholder}

      />

      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
