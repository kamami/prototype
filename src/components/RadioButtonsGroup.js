import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '1',
    input: '',
    sms: '',
    email: ''

  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChange2 = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}             style={{marginLeft: 'auto', marginRight: 'auto'}}
>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            style={{marginLeft: 'auto', marginRight: 'auto'}}
          >
            <FormControlLabel value="1" control={<Radio style={{color: '#B00020'}}/>} label="Email" />


          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}             style={{marginLeft: 'auto', marginRight: 'auto'}}
>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            style={{marginLeft: 'auto', marginRight: 'auto'}}

          >
            <FormControlLabel
              value="2"
              control={<Radio style={{color: '#B00020'}} />}
              label="SMS"
              labelPlacement="start"
            />

          </RadioGroup>


        </FormControl>
        </div>
        <div>
        {this.state.value == "1"  &&

        <MuiThemeProvider>
        <TextField
             hintText="z.B. maxmustermann@gmail.com"
             type="Text"
             onChange={this.handleChange2('email')}
             value={this.state.email}
             underlineFocusStyle={{borderColor: '#B00020',
    borderWidth: 2}}
             underlineStyle={{borderColor: '#B00020', borderWidth:
    1, top: '45px'}}
             hintStyle={{fontSize: 20,  color: 'rgba(0,0,0,0.7)'}}
             inputStyle={{fontSize: 20,  color: '#000'}}
             ref={(input) => { this.textInput = input; }}
             style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginBottom: 60 }}
             />
        </MuiThemeProvider>
      }

      {this.state.value == "2"  &&
      <MuiThemeProvider>
      <TextField
           hintText="z.B. 0176/81299563"
           type="Text"
           onChange={this.handleChange2('sms')}
           value={this.state.sms}
           underlineFocusStyle={{borderColor: '#B00020',
  borderWidth: 2}}
           underlineStyle={{borderColor: '#B00020', borderWidth:
  1, top: '45px'}}
           hintStyle={{fontSize: 20,  color: 'rgba(0,0,0,0.7)'}}
           inputStyle={{fontSize: 20,  color: '#000'}}
           ref={(input) => { this.textInput = input; }}
           style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginBottom: 60 }}
           />
      </MuiThemeProvider>
    }

        </div>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
