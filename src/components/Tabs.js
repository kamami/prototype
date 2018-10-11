import React from 'react';
import Conversation from 'chat-template/dist/Conversation';
import messages from '../components/Messages';

import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';





const Drop = () => (
    <MuiThemeProvider>
        <Paper zDepth={1} >
        <AppBar
            title={<span>Title</span>}
            iconElementLeft={<IconButton><NavigationClose/></IconButton>}
     style={{backgroundColor: '#63fff7'}} zDepth={0}  />

    <Tabs inkBarStyle={{background: '#000'}} style={{height: 350}}>
        <Tab label="preview" value="one" style={{backgroundColor: '#63fff7', fontSize: 20}}>
            <div>
                <Conversation messages={messages}/>
            </div>
        </Tab>
        <Tab label="Story" value="two" style={{backgroundColor: '#63fff7', fontSize: 20}}>
            <div>
                <h2>Work in progress.</h2>
            </div>
        </Tab>
        <Tab label="Kaufen" value="three" style={{backgroundColor: '#63fff7', fontSize: 20}}>
            <div>
                <h2>Work in progress</h2>
            </div>
        </Tab>
    </Tabs>
            </Paper>
        </MuiThemeProvider>
);

export default Drop;