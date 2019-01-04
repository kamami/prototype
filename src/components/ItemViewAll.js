import React from 'react';
import '../App.css';
import Media from "react-media";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import Credits from '@material-ui/icons/MonetizationOn';
import { authHeader } from '../_helpers';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DrawerBottom from '../components/DrawerBottom';
import Fade from '@material-ui/core/Fade';



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ItemViewAll extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      open: false,
      dropdownOpen: false

  };
  this.toggle = this.toggle.bind(this);
  this.updateCredits = this.updateCredits.bind(this);
}

     handleClickOpen = () => {

       this.setState({ open: true});
     };

     handleClose = () => {

       this.setState({ open: false });
     };

     toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }


 componentDidMount(){
   let user = JSON.parse(localStorage.getItem('user'));
   var requestUrl = 'https://mighty-atoll-75521.herokuapp.com/users/';
    {user && user.token &&

   fetch(requestUrl+user._id,{
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

    render() {

      let user = JSON.parse(localStorage.getItem('user'));

        return (
          <div>

                  <Media query="(min-width: 600px)">
                        {matches =>
                          matches ? (
                            <div className="ItemViewAll" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>

                            <div>
                  <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    TransitionComponent={Transition}
                  >
                    <DialogContent>
                        <p> Hallo </p>
                    </DialogContent>
                    <DialogActions>

                      <Button onClick={this.handleClose} style={{color: '#000'}}>
                        Schliessen
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <div className="overlay" onClick={this.handleClickOpen}>
                        <div className="HoverImg">
                            DETAILS
                        </div>
                  </div>
                </div>
              </div>


              ):(
                <Card className="ItemViewAll" style={{backgroundImage: 'url(' + this.props.backdrop + ')', boxShadow: 'none'}}>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullScreen
                  scroll={this.state.scroll}
                  style={{overflow: 'hidden', height: 'calc(100vh + 40px)'}}
                  PaperProps={{


    style: {
      backgroundColor: '#f6f6f6',
      boxShadow: 'none',
    },
  }}
                >

      <AppBar
        style={{overflow: 'hidden', position: 'fixed'}}
      >
        <Toolbar style={{background: '#ffffff', color: '#000'}}>
          <IconButton
            color="inherit"
             onClick={this.handleClose}
             style={{outline: 'none'}}
          >
          <CloseIcon style={{color: '#000', fontSize: 24, marginLeft: -2}} onClick={this.handleClose}/>
          </IconButton>


  {user && user.token &&
            <Button variant="outlined" style={{position: 'absolute', right: 20, background: '#B00020', color: '#ffffff', fontSize: 18, fontFamily: 'roboto'}}>
              <Credits style={{marginRight: '2%'}}/>
               {this.state.credits}</Button>

              }

        </Toolbar>
      </AppBar>
      <Fade in={true}  timeout={2000}>
        <Media query="(max-width: 350px)">
              {matches =>
                matches ? (
                  <DialogContent >
                    <div style={{marginTop: 140, display: 'flex' }}>
                         <div style={{ display: 'inline-block', flex: 1}}>
                           <img className="DetailImgMobile" src={this.props.backdrop} alt="DetailImgMobile"/>

                     </div>

                         <div>
                           <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
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
                           <div className="BreakWords" style={{fontSize: '1.5rem', marginTop: 20, fontFamily: 'Anton', width: '100%', paddingLeft: 0, paddingRight: 0}}>
                             {this.props.title}
                           </div>
                           <div className="BreakWords"
                             style={{fontSize: '1.1rem', marginTop: 20, paddingBottom: 20,
                               fontWeight: 'lighter', width: '100%', textAlign: 'justify', paddingLeft: 0, paddingRight: 0}}>
                             {this.props.description}
                           </div>
                           <div>
                              <DrawerBottom updateCredits = {this.updateCredits} code={this.props.code} matchId={this.props.matchId}/>


                           </div>


                       </div>



                  </DialogContent>
                ) :(

                  <DialogContent>
                    <div style={{marginTop: '50%', display: 'flex', background: '#ffffff', borderRadius: '2em'  }}>
                         <div style={{ display: 'inline-block', flex: 1}}>
                           <img className="DetailImgMobile" src={this.props.backdrop} alt="DetailImgMobile"/>


                         </div>

                         <div>
                           <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
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
                             {this.props.title}
                           </div>
                           <div className="BreakWords"
                             style={{fontSize: '1.1rem', marginTop: 20, paddingBottom: 20,
                               fontWeight: 'lighter', width: '100%', textAlign: 'justify', paddingLeft: 0, paddingRight: 0}}>
                             {this.props.description}
                           </div>
                           <div>
                              <DrawerBottom updateCredits = {this.updateCredits} code={this.props.code} matchId={this.props.matchId}/>


                           </div>


                       </div>

                  </DialogContent>
                )}
              </Media>
                </Fade>

                </Dialog>
              <div className="overlay" onClick={this.handleClickOpen}>

              </div>
          </Card>



              ) }
                  </Media>
                <div className="BreakWords" style={{fontSize: 17, marginTop: 20, fontFamily: 'Anton'}}  onClick={this.handleClickOpen}>
                  {this.props.title}
                </div>
                <div className="BreakWords" style={{fontSize: 13, marginTop: 10, paddingBottom: 20, fontWeight: 'lighter'}}  onClick={this.handleClickOpen}>
                  {this.props.overview}
                </div>
                <div >


                  <a href={this.props.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  <Button variant="contained" style={{backgroundColor: '#3b5998', width: '100%',
                    color: '#ffffff', boxShadow: 'none', borderRadius: "0em 0em 2em 2em", Top: 100}}>
                  Facebook
                  <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}} alt="facebookicon"/>
                  </Button>
                </a>




            </div>

              </div>


        );
    }
};

export default ItemViewAll;
