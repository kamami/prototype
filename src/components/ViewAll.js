import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Media from "react-media";
import Fade from '@material-ui/core/Fade';
import Typed from 'react-typed';
import SearchIcon from '@material-ui/icons/Search';
import { debounce} from 'lodash'
import Content from '../components/Content';
import Button from '@material-ui/core/Button';
import { history } from '../_helpers';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';


class ViewAll extends React.Component{

constructor(props){
  super(props);
  this.state = {
    value: '',
    mounted: true,
    tracks: [],
    hasMoreItems: true,
    page: 2,
    message: '',
    loading: true
  }

  this.searchHandler = this.searchHandler.bind(this);
  this.focus = this.focus.bind(this);
  this.updateMessage = debounce(this.updateMessage, 0 );
  this.loadContent = debounce(this.loadContent.bind(this), 0);



 }

  loadContent() {
    if(this.state.message.length === 0){
    var requestUrl = this.props.url;
    fetch(requestUrl + this.state.page + '&_limit=3'  + this.props.category).then((response)=>{
        return response.json();
    }) .then((tracks)=>{
        this.setState({ tracks: this.state.tracks.concat(tracks)});
        this.setState({page: this.state.page + 1});

        if(this.state.page === 6){
         this.setState({hasMoreItems: false})
       }
    }).catch((err)=>{
        console.log("There has been an error");
    });
}
}

componentDidMount() {

var requestUrl = this.props.url;
fetch(requestUrl + '1&_limit=3' + this.props.category)
    .then((response)=>{
    return response.json();
}) .then((data)=>{
    this.setState({tracks : data, loading: false});
    this.setState({hasMoreItems: true});

})
.catch((err)=>{
    console.log("There has been an error");
});


 }


  searchHandler = ({ target: { value } }) => {
      this.setState({ message: value }, () => {
        if(this.state.message.length === 0){
          this.setState({hasMoreItems: false});
          this.componentDidMount();
          this.setState({page: 2})

        }else{

      var requestUrl = 'https://questdb.herokuapp.com/all?q='
      fetch(requestUrl + this.state.message  + this.props.category).then((response)=>{
          return response.json();
      }) .then((data)=>{
          this.setState({tracks: data});
          if(this.state.tracks.length === 0){
              this.setState({noResults: true})
            } else {
              this.setState({noResults: false})
            }
      })
      }
});
    }

    updateMessage = message => this.setState({ message });

   focus() {
   this.textInput.focus();
 }




render() {



  const {message, data, tracks, noResults} = this.state;


  var items = [];

  tracks.map(function(title, i)

{
    items.push(
            <div>
                <Button style={{ borderRadius: "2em",
                  background: '#ffffff', padding: 0,  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', textTransform: 'none'
                }} zDepth={1} >

                <div>


                  <Media query="(min-width: 1025px)">
                        {matches =>
                          matches ? (


                      <div className="ItemViewAll" style={{backgroundImage: 'url(' + title.image + ')', boxShadow: 'none'}}  >
                        {title.select &&
                        <div style={{display: 'flex', width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 36, marginTop: -1, borderRadius: '2em 2em 0 0' }}>
                          <p style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '1%', marginBottom: '1%', fontFamily: 'Pacifico', color: '#00C9B7', fontSize: '1.4em', lineHeight: '1.6'}}> Fable.Select</p>
                        </div>
                        }

                    <div className="overlay" onClick = {()=> {history.push('/bots/' + title.id)}}>
                      </div>


                </div>
              ):(
                <div className="ItemViewAllMobile" style={{backgroundImage: 'url(' + title.image + ')', boxShadow: 'none'}} onClick = {()=> {history.push('/bots/' + title.id)}}>
                  {title.select &&
                  <div style={{display: 'flex', width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 36, marginTop: -1, borderRadius: '2em 2em 0 0' }}>
                    <p style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '1%', marginBottom: '1%', fontFamily: 'Pacifico', color: '#00C9B7', fontSize: '1.4em', lineHeight: '1.6'}}> Fable.Select</p>
                  </div>
                  }



            </div>

              )}
            </Media>




                      <div className="BreakWords" style={{fontSize: 17, marginTop: 20, fontFamily: 'Anton', color: '#484F58', textAlign: 'left'}} onClick = {()=> {history.push('/bots/' + title.id)}}>
                        {title.title}
                      </div>
                      <div className="BreakWords" style={{fontSize: 13, marginTop: 10, paddingBottom: 20, fontWeight: 'lighter', color: '#484F58', textAlign: 'left', }}  onClick = {()=> {history.push('/bots/' + title.id)}}>
                        {title.body}
                      </div>
                      <div >


                        <a href={title.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Button variant="contained" style={{backgroundColor: '#0084ff', width: '100%',
                          color: '#ffffff', boxShadow: 'none', borderRadius: "0em 0em 2em 2em", Top: 100}}>
                        Messenger
                        <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}} alt="facebookicon"/>
                        </Button>
                      </a>

                    </div>



                  </div>

      </Button>
      </div>
    );
  }, this);



    return (

      <div>



        {this.props.drawerOpen === false &&


            <Fade in={true}  timeout={1000}>

<div style={{backgroundColor: 'rgba(255, 255, 255, 1)', marginBottom: 20}} className="city">
  <MuiThemeProvider>

    <TextField hintText= <div>
  <SearchIcon style={{fontSize: '1.3em', color: 'rgba(72,79,88,0.8)', marginBottom: -5}}/>

      <Typed
                 strings={[
                     'Das ist deine Suche',
                     'Welchen Bot suchst du?',
                     'Text-Adventures?',
                     'Quizzes?',
                     'Einfach hier tippen!']}
                     typeSpeed={70}
                     backSpeed={90}
                     loop >
                 </Typed>
</div>



         type="Text"
         onChange={this.searchHandler}
         value={message}
         underlineFocusStyle={{borderColor: '#ffffff', borderWidth: 0}}
         underlineStyle={{borderColor: '#ffffff', borderWidth: 0}}
         hintStyle={{fontSize: '1.5em', fontFamily: 'Anton', color: 'rgba(72,79,88,0.8)'}}
         inputStyle={{fontSize: '1.5em', fontFamily: 'Anton', color: '#484F58'}}
         ref={(input) => { this.textInput = input; }}
         style={{caretColor: '#484F58', width: '85%', maginLeft: 'auto', marginRight: 'auto',
           marginTop:  56}}

         />


     </MuiThemeProvider>
      </div>
      </Fade>


         }


           {noResults ?
             <Fade in={true}  timeout={2000}>
               {this.props.drawerOpen ?

                 <div style={{ position: 'absolute', left: '50%'}}>

                   <img src={require("../assets/no_results_found.png")} style={{width: '100%', position: 'relative', left: '-50%', marginTop: '30vh'}}/>
                     <p style={{top: '100%', left: '-50%', color: '#484F58', fontSize: '0.8em', fontFamily: 'roboto', textAlign: 'center', position: 'absolute'}}> Nichts gefunden.</p>

                 </div>
                 :
             <div style={{ position: 'absolute', left: '50%'}}>

               <img src={require("../assets/no_results_found.png")} style={{width: '100%', position: 'relative', left: '-50%'}}/>
                 <p style={{top: '100%', left: '-50%', color: '#484F58', fontSize: '1.5em', fontFamily: 'roboto', textAlign: 'center', position: 'absolute'}}> Nichts gefunden.</p>

             </div>
           }
           </Fade>
           :
           <div>
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
           <Content items={items} hasMoreItems={this.state.hasMoreItems} loadContent={this.loadContent} />
           </div>
         }


</div>
    )
  }
}

export default ViewAll;
