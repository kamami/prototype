import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{

  constructor(props){
    super(props);
    this.state={
      hidden: 'hidden'
    }
  }
      componentDidMount() {
          var that = this;
          setTimeout(function() {
              that.show();
          }, that.props.wait);
      }

      show() {
          this.setState({hidden : ""});
      }


    render() {
        return (

          <div style={{backgroundColor: '#82f2da', height: 120, width: '100%', marginTop: 40, bottom: 0}} className={this.state.hidden}>

              <ul style={{paddingTop: 50, paddingLeft: 50, color: '#ffffff'}}>

                <li style={{paddingBottom: 20,  color: '#ffffff'}}>
                <Link to="/impressum/" style={{textDecoration: 'none', color: '#ffffff'}}>
                    Impressum
                </Link>
                </li>

              </ul>


          </div>

        )
      }
    }

export default Footer;
