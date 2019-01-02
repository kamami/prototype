import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Fade from '@material-ui/core/Fade';
import Media from "react-media";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8  }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    backgroundColor: '#f6f6f6',
    padding: 0
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    background: '#ffffff',
    boxShadow:  '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)'

  },
  tabsIndicator: {
    backgroundColor: '#B00020',
  },
  tabRoot: {
    fontSize: 20,
    color: '#000',
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#B00020',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#B00020',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#B00020',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
  this.setState({ value: index });
};


  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
      {this.props.open == false &&

        <Tabs
        centered
        fullWidth
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Impressum"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Datenschutz"
          />

        </Tabs>
      }
      {this.props.open == true &&

        <Tabs
        centered
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Impressum"
            style={{fontSize: 10}}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Datenschutz"
            style={{fontSize: 10}}

          />

        </Tabs>
      }
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
      >

        <TabContainer dir={theme.direction}>

        <div style={{textAlign: 'center', width: '100%', }}>

          {this.props.open == false &&
            <Fade in={!this.props.open} timeout={1500}>
              <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 70}}>
                <p style={{fontSize: 30, fontFamily: 'Anton', marginBottom: 70}} >Impressum</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto'}}> Martin Seubert</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto'}}> Leitengraben 3</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto'}}> 97084 Würzburg</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto'}}> mail@martinseubert.de</p>

              </div>


            </Fade>


      }
      {this.props.open == true &&

        <Fade in={this.props.open}  timeout={1000}>

    <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 70}}>
      <p style={{fontSize: 20, fontFamily: 'Anton', marginBottom: 70}} >Impressum</p>
      <p style={{fontSize: 13, fontFamily: 'Roboto'}}> Martin Seubert</p>
      <p style={{fontSize: 13, fontFamily: 'Roboto'}}> Leitengraben 3</p>
      <p style={{fontSize: 13, fontFamily: 'Roboto'}}> 97084 Würzburg</p>
      <p style={{fontSize: 13, fontFamily: 'Roboto'}}> mail@martinseubert.de</p>

    </div>
  </Fade>


  }

        </div>

        </TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
      </SwipeableViews>
      </div>
    );
  }
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
   theme: PropTypes.object.isRequired
 };


export default withStyles(styles, { withTheme: true })(CustomTabs);
