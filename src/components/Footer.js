import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{



    render() {
        return (

          <div style={{backgroundColor: '#82f2da', height: 250, width: '100%', marginTop: 10, postion: 'absolute', bottom: 0}}>

              <ul style={{paddingTop: 50, paddingLeft: 50, color: '#ffffff'}}>

                <li style={{paddingBottom: 20,  color: '#ffffff'}}>
                <Link to="/impressum/" style={{textDecoration: 'none', color: '#ffffff'}}> 
                    Impressum
                </Link>
                </li>
                <li style={{paddingBottom: 20,  color: '#ffffff'}}>Hilfe-Center</li>
                <li style={{paddingBottom: 20,  color: '#ffffff'}}>Kontakt</li>
                <li style={{paddingBottom: 20,  color: '#ffffff'}}>Karriere</li>
              </ul>


          </div>

        )
      }
    }

export default Footer;
