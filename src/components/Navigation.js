import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

render() {
        return (
            <div id="navigation" className="Navigation">

                <nav>
                    <ul>

                            <Link to="/browse/" style={{textDecoration: 'none', color: '#000'}}><li>Browse</li>
                            </Link>
                        <li>Meine Liste</li>
                        <li>Beliebtesten</li>
                        <li>Verlauf</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;