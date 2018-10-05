import React from 'react';
import {Link} from 'react-router-dom';


var HeroButton = React.createClass({
    render: function() {
        return (
            <Link style={{textDecoration: 'none'}} to="/details/" className="Button" data-primary={this.props.primary}>{this.props.text}</Link>


        );
    }
})

export default HeroButton;