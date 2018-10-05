import React from 'react';

var UserProfile = React.createClass({
    render: function() {
        return (
            <div className="UserProfile">
                <div className="User">
                    <div className="name">Martin Seubert</div>
                    <div className="image"><img src="https://lh3.googleusercontent.com/-R6o-RDKzr0c/WoglM2G3pUI/AAAAAAAAAZQ/S0yYEhrF0_4N7xXVNA3WeFNJ6LBayu_mwCEwYBhgL/w140-h139-p/ppetmp.jpg" alt="profile" /></div>
                </div>
            </div>
        );
    }
});

export default UserProfile;