import React from 'react';
import HeroButton from './HeroButton';


var Hero = React.createClass({
    render: function() {
        const imageUrl = require(`../assets/Maria.png`)

        return (
            <div id="hero" className="Hero" style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="content">
                    <p style={{fontSize:45, fontFamily: 'roboto', marginBottom: 10}}>Der geheimnisvolle Tod des Kilian Schreck</p>
                    <h2>Stadtführung in Würzburg</h2>
                    <p>Jeder in Würzburg kennt die Ikone Kilian Schreck. Besser: Jeder kannte ihn... Denn die Leiche des unbeliebten Immobilienmoguls wurde im Vierröhrenbrunnen aufgefunden. Kannst du den Mörder dingfest machen?</p>
                    <div className="button-wrapper">
                        <HeroButton className="Button" primary={true} text="Jetzt starten" />
                        <HeroButton primary={false} text="+ meine Liste" />
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
})

export default Hero;