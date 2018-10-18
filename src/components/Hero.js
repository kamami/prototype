import React from 'react';
import HeroButton from './HeroButton';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';


class Hero extends React.Component{
    render() {
        const imageUrl = require(`../assets/Maria.png`)

        return (

            <div id="hero" className="Hero">

                <div className="content">
                  <MuiThemeProvider>
                      <Paper  zDepth={4} style={{background: 'transparent', padding: 40}}>
                <p style={{fontSize:45, fontFamily: 'roboto', marginBottom: 30}}>Der geheimnisvolle Tod des Kilian Schreck</p>
                    <h2 style={{marginBottom: 30}}>Stadtführung in Würzburg</h2>
                    <p style={{marginBottom: 30}}>Jeder in Würzburg kennt die Ikone Kilian Schreck. Besser: Jeder kannte ihn... Denn die Leiche des unbeliebten Immobilienmoguls wurde im Vierröhrenbrunnen aufgefunden. Kannst du den Mörder dingfest machen?</p>
                      <div>
                        <HeroButton text="Jetzt starten" background="#ffffff" label="#000" to="/browse/"/>
                        <HeroButton text="+ meine Liste" background="#ffffff" label="#000" to="#section1"/>
                      </div>
                    </Paper>
                  </MuiThemeProvider>
                </div>

                <div className="overlay"></div>
            </div>
        );
    }
}

export default Hero;
