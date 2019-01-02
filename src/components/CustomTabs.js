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
    height: 3,
    minWidth: '50%'

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

        <div >

            <Fade in={!this.props.open} timeout={1500}>
              <div>
                <p style={{fontSize: 30, fontFamily: 'Anton', marginBottom: 20}} >Impressum</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto', marginBottom: 0}}> Martin Seubert</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto', marginBottom: 0}}> Leitengraben 3</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto', marginBottom: 0}}> 97084 Würzburg</p>
                <p style={{fontSize: 20, fontFamily: 'Roboto', marginBottom: 0}}> mail@martinseubert.de</p>

              </div>


            </Fade>





        </div>

        </TabContainer>
        <TabContainer dir={theme.direction}>

        <div style={{ height: '100vh'}}>
        <p style={{fontSize: 30, fontFamily: 'Anton', marginBottom: 20}}>Privacy Policy of the Facebook apps</p>
        <p style={{fontSize: 20, fontFamily: 'Roboto'}}> In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.</p>
        <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}> Data Controller and Owner </p>
        <p style={{fontSize: 18, fontFamily: 'Roboto'}}> Leitengraben 3, 97084 Würzburg </p>
        <p style={{fontSize: 18, fontFamily: 'Roboto'}}> mail@martinseubert.de </p>
        <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}> Types of Data collected </p>
        <p style={{fontSize: 20, fontFamily: 'Roboto'}}>The owner does not provide a list of Personal Data types collected.
        Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection.
        The Personal Data may be freely provided by the User, or collected automatically when using this Application.
        Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.
        Failure to provide certain Personal Data may make it impossible for this Application to provide its services.
        Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
        </p>
        <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}> Mode and place of processing the Data </p>
        <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Methods of processing </p>
        <p style={{fontSize: 20, fontFamily: 'Roboto'}}>The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
        The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.
        </p>
        <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Place </p>
        <p style={{fontSize: 20, fontFamily: 'Roboto'}}>The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.
        </p>
        <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Retention time </p>
          <p style={{fontSize: 20, fontFamily: 'Roboto'}}> The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.
          </p>
            <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}> The use of the collected Data </p>
                <p style={{fontSize: 20, fontFamily: 'Roboto'}}> The Personal Data used for each purpose is outlined in the specific sections of this document. </p>
                <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}> Facebook permissions asked by this Application </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto'}}> This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it.
For more information about the following permissions, refer to the Facebook permissions documentation and to the Facebook privacy policy.
The permissions asked are the following:
</p>
            <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}>Basic information</p>
              <p style={{fontSize: 20, fontFamily: 'Roboto'}}> By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.
                </p>
                  <p style={{fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'}}>Additional information about Data collection and processing </p>
                  <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Legal action </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto'}}> The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.
The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.
                  </p>
                  <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Additional information about User's Personal Data </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto'}}> In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.

                  </p>
                  <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Information not contained in this policy </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto'}}>More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.


                  </p>
                  <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> The rights of Users
 </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto'}}> Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.
This Application does not support “Do Not Track” requests.
To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies.

                  </p>
                  <p style={{fontSize: 22, fontFamily: 'Roboto', fontWeight: 'bold'}}> Changes to this privacy policy
 </p>
                  <p style={{fontSize: 20, fontFamily: 'Roboto', marginBottom: 200}}> The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data.
                  Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.


                  </p>
                  </div>

        </TabContainer>
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
