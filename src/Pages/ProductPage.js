import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { history } from '../_helpers';
import Button from '@material-ui/core/Button';
import DrawerBottom from '../components/DrawerBottom';
import { authHeader } from '../_helpers';
import Credits from '@material-ui/icons/MonetizationOn';
import Copyright from '@material-ui/icons/Copyright';
import CustomSnackbar from '../components/CustomSnackbar';
import Dialog from '@material-ui/core/Dialog';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import ReactDOM from 'react-dom';
import Media from "react-media";
import MetaTags from 'react-meta-tags';


const styles = {


 showFacebook: {

   transition: "all 2s, color 0s",
   borderRadius: '2em',
   width: '38vw',
   marginRight: '4vw',
   height: '40px',
   boxShadow: 'none'
 },

 hideFacebook: {

   transform: "translate(-0vw, 20px)",
   transition: "all 1s, color 0s",
   borderRadius: '0em',
   width: '50%',
   fontSize: '1.2em',
   height: '56px',
   boxShadow: 'none'


 },
 showCredits: {

   transition: "all 2s",
   borderRadius: '2em',
   width: '38vw',
   marginLeft: '4vw',
   height: '40px',
   boxShadow: 'none'



 },
 hideCredits: {

   transform: "translate(0vw, 20px)",
   transition: "all 1s",
   borderRadius: '0em',
   width: '50%',
   fontSize: '1.2em',
   height: '56px',
   boxShadow: 'none'



 },

 showFacebookSmall: {

   transition: "all 2s, color 0s",
   borderRadius: '2em',
   width: '38vw',
   marginRight: '4vw',
   fontSize: '0.7em',
   height: '40px',
   padding: '6px 14px 6px 14px',
   boxShadow: 'none'



 },

 hideFacebookSmall: {

   transform: "translate(-0vw, 20px)",
   transition: "all 1s, color 0s",
   borderRadius: '0em',
   width: '50%',
   fontSize: '1em',
   height: '56px',
   boxShadow: 'none'



 },
 showCreditsSmall: {

   transition: "all 2s",
   borderRadius: '2em',
   width: '38vw',
   marginLeft: '4vw',
   fontSize: '0.7em',
   height: '40px',
   padding: '6px 14px 6px 14px',
   boxShadow: 'none'




 },
 hideCreditsSmall: {

   transform: "translate(0vw, 20px)",
   transition: "all 1s",
   borderRadius: '0em',
   width: '50%',
   fontSize: '1em',
   height: '56px',
   boxShadow: 'none'

 },

 showIconFacebook: {

   transition: "all 2s, color 0s",
   width: 16,
   marginLeft: '3vw',
   height: 16,
 },

 hideIconFacebook: {

   transition: "all 2s, color 0s",
   width: 20,
   marginLeft: '3.1vw',
   height: 20,
 },

 showIconCredits: {

   transition: "all 2s, color 0s",
   width: 16,
   marginRight: '3vw',
   height: 16,
 },

 hideIconCredits: {

   transition: "all 2s, color 0s",
   width: 20,
   marginRight: '3.1vw',
   height: 20,
 },


 hideFacebookFix: {

  position: 'fixed',
  top: 56,
  right: 0,
  borderRadius: '0em',
  width: '50%',
  fontSize: '1.2em',
  height: '56px',
  transform: "translate(0vw, 20px)",
  transition: "all 1s, color 0s",
  boxShadow: '-1px 3px 2px 0px rgba(0,0,0,0.4)'

 },


 hideCreditsFix: {

  position: 'fixed',
  top: 56,
  borderRadius: '0em',
  width: '50%',
  fontSize: '1.2em',
  height: '56px',
  transform: "translate(0vw, 20px)",
  transition: "all 1s, color 0s",
  boxShadow: '-1px 3px 2px 0px rgba(0,0,0,0.4)'

 },

 hideFacebookFixSmall: {

  position: 'fixed',
  top: 56,
  right: 0,
  borderRadius: '0em',
  width: '50%',
  fontSize: '1em',
  height: '56px',
  transform: "translate(0vw, 20px)",
  transition: "all 1s, color 0s",
  boxShadow: '-1px 3px 2px 0px rgba(0,0,0,0.4)'

 },

 hideCreditsFixSmall: {

  position: 'fixed',
  top: 56,
  borderRadius: '0em',
  width: '50%',
  fontSize: '1em',
  height: '56px',
  transform: "translate(0vw, 20px)",
  transition: "all 1s, color 0s",
  boxShadow: '-1px 3px 2px 0px rgba(0,0,0,0.4)'

 },

 appBar: {
   boxShadow: 'none',
   transition: "all 1s",
   backgroundColor: '#ffffff'

 },

 hideCreditsimage: {

   transition: "all 2s, color 0s",
   width: 20,
   marginRight: '3.1vw',
   height: 20,
 },

 hideFacebookimage: {

   transition: "all 2s, color 0s",
   width: 20,
   marginLeft: '3.1vw',
   height: 20,
 },

 blur: {
   width: '100vw',
   height: '25vh',
   marginTop: '56px',
   objectFit: 'cover',
   webkitFilter:' blur(30px)',
   mozFilter: 'blur(30px)',
oFilter: 'blur(30px)',
msFilter: 'blur(30px)',
filter: 'blur(30px)',
webkitTransition:' 2s -webkit-filter linear',
oTransition: '2s -o-filter linear',
transition: '1s -webkit-filter linear',
backfaceVisibility: 'hidden'



},
noBlur:{
  width: '100vw',
  height: '25vh',
  marginTop: '56px',
  objectFit: 'cover',
  webkitFilter: 'blur(0px)',
  mozFilter: 'blur(0px)',
  oFilter: 'blur(0px)',
  msFilter: 'blur(0px)',
filter: 'blur(0px)',
webkitTransition:' 2s -webkit-filter linear',
oTransition: '2s -o-filter linear',
transition: '1s -webkit-filter linear', 
backfaceVisibility: 'visible'



},


}


class ProductPage extends React.Component {
  constructor(props){
      super(props)
      this.state ={
        loading: true

      }
      this.updateCredits = this.updateCredits.bind(this);
      this.copy = this.copy.bind(this);
      this.updateDimensions = this.updateDimensions.bind(this);
      this.getScrollClassNameFacebook = this.getScrollClassNameFacebook.bind(this);
      this.getScrollClassNameCredits = this.getScrollClassNameCredits.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
  }



  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

  }

  updateDimensions() {
    this.setState({ heightSet: Math.round(window.scrollY) })
    console.log(this.state.heightSet)

}

handleScroll() {
  const lastScroll = window.scrollY;
  if (lastScroll === this.state.lastScroll) {
    return;
  }

  const shouldShow =
    this.lastScroll !== null ? lastScroll < this.lastScroll : null;

  if (shouldShow !== this.state.shouldShow) {
    this.setState(prevState => ({
      ...prevState,
      shouldShow,
    }));
  }

  this.lastScroll = lastScroll;
}

getScrollClassNameFacebook() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideFacebook;

   } else if(this.state.heightSet < this.state.offsetHeight){
     return this.props.classes.showFacebook;

   }

}

getScrollClassNameCredits() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideCredits;

   } else if(this.state.heightSet < this.state.offsetHeight){
     return this.props.classes.showCredits;

   }

}

getScrollClassNameFacebookSmall() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideFacebookSmall;

   } else if(this.state.heightSet < this.state.offsetHeight){
     return this.props.classes.showFacebookSmall;

   }

}

getScrollClassNameCreditsSmall() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideCreditsSmall;

   } else if(this.state.heightSet < this.state.offsetHeight){
     return this.props.classes.showCreditsSmall;

   }

}

getScrollClassNameBlur() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.blur;

   } else {
     return this.props.classes.noBlur;

   }

}

getScrollClassNameIconFacebook() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideIconFacebook;

   } else{
     return this.props.classes.showIconFacebook;

   }

}

getScrollClassNameIconCredits() {
  if (this.state.shouldShow === null) {
    return '';
  }
   else if(this.state.shouldShow === false && this.state.heightSet > 40){
     return this.props.classes.hideIconCredits;

   } else {
     return this.props.classes.showIconCredits;

   }

}

getFixFacebook() {
  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideFacebookFix;

   }

}


getFixCredits() {

  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideCreditsFix;


   }

}

getFixFacebookSmall() {
  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideFacebookFixSmall;

   }

}


getFixCreditsSmall() {

  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideCreditsFixSmall;


   }

}

getimageFacebook() {
  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideFacebookimage;

   }

}


getimageCredits() {

  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.hideCreditsimage;


   }

}

getAppbar() {

  if (this.state.shouldShow === null) {
    return '';

  }else if( this.state.heightSet >= this.state.offsetHeight ){
     return this.props.classes.appBar;


   }

}





  componentDidMount() {
    var offsetHeight = document.getElementById('image').offsetHeight;
    this.setState({ offsetHeight }, () => {
      console.log(this.state.offsetHeight)
}
    );

      window.onload = function() {
     setTimeout (function () {
      window.scrollTo(0,0);
     }); //100ms for example
    }
    this.updateDimensions();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('scroll', this.updateDimensions);

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
      this.setState({ matchId: data.matchId});
      this.setState({credits: data.credits});
      this.setState({rightsTo: data.rightsTo});
      this.setState({select: data.select, loading: false });


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
  closeSnackbar=() => {
    this.setState({copied: false})
  }




    render() {

      let user = JSON.parse(localStorage.getItem('user'));

        return (
          <div style={{background: '#ffffff', height: 'calc(100vh - 56px)'}} >
            <MetaTags>
         <title>{this.state.title}</title>
         <meta name="description" content={this.state.description} />
         <meta property="og:title" content={this.state.title} />
         <meta property="og:image" content={this.state.backdrop} />
       </MetaTags>
            <CustomSnackbar snackbarOpen={this.state.copied} closeSnackbar={this.closeSnackbar}/>

              <AppBar
                position="fixed"
                className={classNames(`${this.getAppbar()}`)}
              >
                <Toolbar  style={{background: '#ffffff', color: '#000',maxHeight: '56px'
      }}>


                  <IconButton

                    style={{outline: 'none', color: '#000'}}
                    onClick={history.goBack}
                  >
                    <BackIcon />
                  </IconButton>
                  {user && user.token &&
                  <Button variant="outlined" style={{height: 40, position: 'absolute', right: 20, background: '#40E0D0', color: '#ffffff', fontSize: 18, fontFamily: 'roboto', borderWidth: 0}}>
                              <Credits style={{marginRight: '2%'}}/>
                               {this.state.credits}</Button>

                              }

                </Toolbar>
              </AppBar>

                   <div  style={{position: 'fixed', top: 0, zIndex: -1}}>
                     <img id="image" className={classNames(`${this.getScrollClassNameBlur()}`)} src={this.state.backdrop} alt="DetailImgMobile" />
                   </div>

                   <Media query="(min-width: 361px)">
                         {matches =>
                           matches ? (
                          <div>
                     <a href={this.state.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  <Button variant="contained" style={{backgroundColor: '#0084ff',
                   marginTop: -20, float: 'right'}}
                   className={classNames(`${this.getScrollClassNameFacebook()}`, `${this.getFixFacebook()}`)}
                   >
                  Messenger
                  <img src={require("../assets/facebookicon.png")} className={classNames(`${this.getScrollClassNameIconFacebook()}`, `${this.getimageFacebook()}`)} alt="facebookicon"/>
                  </Button>
                  </a>

                  {this.state.select ?
                  <Button variant="contained" style={{backgroundColor: '#40E0D0',
              marginTop: -20, float: 'left'}}
                   className={classNames(`${this.getScrollClassNameCredits()}`, `${this.getFixCredits()}`)}
                   >
                   <img src={require("../assets/crediticon.png")} className={classNames(`${this.getScrollClassNameIconCredits()}`)} alt="credits"/>

                  20 Credits
                  </Button>
                  :

                  <Button variant="contained" style={{backgroundColor: '#40E0D0',
                    marginTop: -20, float: 'left'}}
                  className={classNames(`${this.getScrollClassNameCredits()}`, `${this.getFixCredits()}`)}
                  >
                  <img src={require("../assets/crediticon.png")} className={classNames(`${this.getScrollClassNameIconCredits()}`, `${this.getimageCredits()}`)} alt="credits"/>

                  Free
                  </Button>
                  }

                   </div>

                 ):(

                   <div>
              <a href={this.state.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
           <Button variant="contained" style={{backgroundColor: '#0084ff',
             marginTop: -20, float: 'right'}}
             className={classNames(`${this.getScrollClassNameFacebookSmall()}`, `${this.getFixFacebookSmall()}`)}
            >
           Messenger
           <img src={require("../assets/facebookicon.png")} className={classNames(`${this.getScrollClassNameIconFacebook()}`, `${this.getimageFacebook()}`)} alt="facebookicon"/>
           </Button>
           </a>

           {this.state.select ?
           <Button variant="contained" style={{backgroundColor: '#40E0D0',
           marginTop: -20, float: 'left'}}
            className={classNames(`${this.getScrollClassNameCreditsSmall()}`, `${this.getFixCreditsSmall()}`)}
            >
            <img src={require("../assets/crediticon.png")} className={classNames(`${this.getScrollClassNameIconCredits()}`, `${this.getimageCredits()}`)} alt="credits"/>

           20 Credits
           </Button>
           :

           <Button variant="contained" style={{backgroundColor: '#40E0D0',
            marginTop: -20, float: 'left'}}
           className={classNames(`${this.getScrollClassNameCreditsSmall()}`, `${this.getFixCreditsSmall()}`)}
           >
           <img src={require("../assets/crediticon.png")} className={classNames(`${this.getScrollClassNameIconCredits()}`, `${this.getimageCredits()}`)} alt="credits"/>

           Free
           </Button>
           }

            </div>

                 )}
               </Media>

                   <div style={{marginTop: 'calc(25vh + 56px)', zIndex: 99, padding: "0vw 4vw 0vw 4vw", backgroundColor: '#ffffff'}}>
                     <div style={{paddingTop: '9vh', width: '100%'}}>
                     <div style={{display : 'flex', color: '#484F58', fontSize: '1.5rem', marginTop: 20, fontFamily: 'Anton', width: '100%', paddingLeft: 0, paddingRight: 0, marginBottom: '3vh'}}>
                       {this.state.title}
                     </div>
                     <Divider style={{width: '30%', height: 3, backgroundColor: '#40E0D0'}}/>
                     <div
                       style={{fontSize: '1.1rem', marginTop: 20, paddingBottom: 20,
                         fontWeight: 'lighter', width: '100%', paddingLeft: 0, paddingRight: 0, color: '#484F58', fontFamily: 'roboto',  lineHeight: 1.5}}>
                       {this.state.description}
                     </div>



                   </div>

                     <div style={{ marginTop: 20, paddingBottom: 20}}>
                        { this.state.rightsTo === "" ?

                          <p style={{fontSize: '0.8em', fontWeight: 'lighter', width: '100%', color: '#484F58', fontFamily: 'roboto',  lineHeight: 1.5}}>
                            <Copyright style={{position: 'relative', top: '2.5px', right: '3px', height: 15}}/>
                             <span> Publisher: </span>
                            unknown


                          </p>
                          :
                          <p style={{fontSize: '0.8em', fontWeight: 'lighter', width: '100%', color: '#484F58', fontFamily: 'roboto',  lineHeight: 1.5}}>
                            <Copyright style={{position: 'relative', top: '2.5px', right: '3px', height: 15}}/>
                             <span> Publisher: </span>
                             <a href={this.state.rightsTo} style={{textDecoration: 'none', color: '#484F58'}}>{this.state.rightsTo} </a>


                          </p>
                        }

                     </div>


                     <DrawerBottom updateCredits = {this.updateCredits} code={this.state.code}
                       matchId={this.state.matchId} copy={this.copy} credits={this.state.credits}
                       select={this.state.select} messenger={this.state.messenger}/>




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
ProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


const connectedProfilePage = connect(mapStateToProps)(ProductPage);

export default withStyles(styles)(ProductPage );
