import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import Facebook from '../components/Facebook';
import { history } from '../_helpers';
import Button from '@material-ui/core/Button';
import DrawerBottom from '../components/DrawerBottom';
import { authHeader } from '../_helpers';
import Credits from '@material-ui/icons/MonetizationOn';
import CustomSnackbar from '../components/CustomSnackbar';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';


class ProductPage extends React.Component {
  constructor(props){
      super(props)
      this.state ={
        loading: true

      }
      this.updateCredits = this.updateCredits.bind(this);
      this.copy = this.copy.bind(this);

  }




  componentDidMount() {

    const { match: { params } } = this.props;
    let user = JSON.parse(localStorage.getItem('user'));
    var requestUrlUser = 'https://mighty-atoll-75521.herokuapp.com/users/';
    var requestUrl = 'https://questdb.herokuapp.com/all/'
    fetch(requestUrl + `${params.id}`)
    .then(response => response.json())
    .then((data) =>{
      this.setState({ title: data.title });
      this.setState({ overview: data.body });
      this.setState({ backdrop: data.image });
      this.setState({ description: data.description });
      this.setState({ messenger: data.messenger });
      this.setState({ code: data.key });
      this.setState({ matchId: data.matchId, loading: false });

    }

  ) .then((data) =>{
    {user && user.token &&

   fetch(requestUrlUser+user._id,{
     method: 'get',
     headers: {
       ...authHeader(),
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
   })
   .then((response)=>{
   return response.json();
 }) .then((user)=>{
   this.setState({credits : user.credits});
   })
 }
    }

    )
  }

  updateCredits() {
    let user = JSON.parse(localStorage.getItem('user'));
    var requestUrl = 'https://mighty-atoll-75521.herokuapp.com/users/';
    var id = user._id
    fetch(requestUrl + id, {
        method: 'put',
        headers: {
          ...authHeader(),
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({credits: this.state.credits - 20})
      }) .then((user)=>{
            this.setState({credits: this.state.credits - 20});
            this.forceUpdate();
        })
  }

  copy(){
    this.setState({
      copied: true
    })
  }




    render() {
      let user = JSON.parse(localStorage.getItem('user'));

        return (

            <div >
            <CustomSnackbar snackbarOpen={this.state.copied} />

              <AppBar
                position="fixed"

              >
                <Toolbar  style={{background: '#ffffff', color: '#000',       maxHeight: '56px'
      }}>


                  <IconButton

                    style={{outline: 'none', color: '#000'}}
                    onClick={history.goBack}
                  >
                    <BackIcon />
                  </IconButton>
                  {user && user.token &&
                  <Button variant="outlined" style={{position: 'absolute', right: 20, background: '#B00020', color: '#ffffff', fontSize: 18, fontFamily: 'roboto'}}>
                              <Credits style={{marginRight: '2%'}}/>
                               {this.state.credits}</Button>

                              }

                </Toolbar>
              </AppBar>
              <div style={{padding: '5%', marginTop: '15%'}}>
              <div style={{ display: 'flex', background: '#ffffff', borderRadius: '2em'  }}>
                   <div style={{ display: 'inline-block', flex: 1}}>
                     <img className="DetailImgMobile" src={this.state.backdrop} alt="DetailImgMobile"/>


                   </div>

                   <div>
                     <a href={this.state.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                 <Button variant="contained" style={{backgroundColor: '#3b5998',
                   color: '#ffffff', boxShadow: 'none', borderRadius: "2em 2em 2em 2em"}}>
                 Facebook
                 <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}} alt="facebookicon"/>
                 </Button>
               </a>
               <div style={{display: 'flex'}}>
                 <Credits style={{marginRight: '2%', float: 'left', marginTop: 24, color: '#B00020'}}/>

                 <p style={{marginTop: 20, fontFamily: 'Roboto', marginLeft: 5, fontSize: 20, color:'#B00020'}}> 20 Credits</p>

               </div>
             </div>

           </div>
                   <div>
                     <div className="BreakWords" style={{fontSize: '1.5rem', marginTop: 40, fontFamily: 'Anton', width: '100%', paddingLeft: 0, paddingRight: 0}}>
                       {this.state.title}
                     </div>
                     <div className="BreakWords"
                       style={{fontSize: '1.1rem', marginTop: 20, paddingBottom: 20,
                         fontWeight: 'lighter', width: '100%', textAlign: 'justify', paddingLeft: 0, paddingRight: 0}}>
                       {this.state.description}
                     </div>
                     <div>
                     <DrawerBottom updateCredits = {this.updateCredits} code={this.state.code} matchId={this.state.matchId} copy={this.copy}/>


                     </div>


                 </div>
                 </div>

                 {this.state.loading &&
                   <Dialog
                         open={true}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                         fullScreen
                         PaperProps={{


                   style: {
                   backgroundColor: 'rgba(255, 255, 255, 0.5)',
                   boxShadow: 'none',
                   },
                   }}
                       >
                       <DialogContent >
                         <div  style={{display: 'flex'}}>

                         <div  className="loader" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '100%'}}>

                         </div>
                       </div>
                       </DialogContent>
                     </Dialog>

               }


            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.authentication;
    return {
        isLoggedIn
    };
}

const connectedProfilePage = connect(mapStateToProps)(ProductPage);
export { connectedProfilePage as ProductPage };
