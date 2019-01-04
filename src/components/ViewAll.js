import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ItemViewAll from '../components/ItemViewAll';
import StackGrid, {transitions} from "react-stack-grid";
import Paper from 'material-ui/Paper';
import * as easings from '../components/easings';
import TextField from 'material-ui/TextField';
import button from 'reactstrap';
import Media from "react-media";
import InfiniteScroll from 'react-infinite-scroller';
import Fade from '@material-ui/core/Fade';
import Typed from 'react-typed';
import SearchIcon from '@material-ui/icons/Search';
import { debounce} from 'lodash'


const { scaleDown } = transitions;

class ViewAll extends React.Component{

constructor(props){
  super(props);
  this.state = {
    value: '',
    mounted: true,
    tracks: [],
    hasMoreItems: true,
    page: 2,
    message: ''
  }

  this.searchHandler = this.searchHandler.bind(this);
  this.focus = this.focus.bind(this);
  this.updateMessage = debounce(this.updateMessage, 0 );
  this.loadContent = debounce(this.loadContent.bind(this), 0);


 }

  loadContent() {
    if(this.state.message.length === 0){
    var requestUrl = this.props.url;
    fetch(requestUrl + this.state.page + '&_limit=3').then((response)=>{
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
  window.scrollTo(0, 0);

var requestUrl = this.props.url;
fetch(requestUrl + '1&_limit=3')
    .then((response)=>{
    return response.json();
}) .then((data)=>{
    this.setState({tracks : data});
    this.setState({hasMoreItems: true})

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
      fetch(requestUrl + this.state.message).then((response)=>{
          return response.json();
      }) .then((data)=>{
          this.setState({ tracks: data});

      })
      } // this will print out the new value
});


    }


    updateMessage = message => this.setState({ message });



   focus() {
   this.textInput.focus();
 }

render() {

  const {message, data, tracks} = this.state;

  const loader = <div className="loader2"> </div>;

  var items = [];
  const imageUrl = require(`../assets/white-wall.jpg`)

  tracks.map(function(title, i)

{
    items.push(
            <div>
              <MuiThemeProvider>
                <Paper style={{ borderRadius: "2em",
                  background: '#ffffff'
                }} zDepth={1} >

          <ItemViewAll
            key={title.id}
            title={title.title}
            score={title.vote_average}
            overview={title.body}
            backdrop={title.image}
            description={title.description}
            messenger={title.messenger}
            code={title.key}
            matchId={title.matchId}

              />
      </Paper>
      </MuiThemeProvider>
      </div>
    );
  }, this);



    return (
      <div>


      <Media query="(max-width: 599px)">
        {matches =>
          matches ? (


            <Fade in={true}  timeout={1000}>

<div style={{backgroundImage: 'url(' + imageUrl + ')', marginBottom: 20}} className="city">
  <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: '7%'}} className="city">
  <MuiThemeProvider>

    <TextField hintText={this.props.drawerOpen === false ?
<div>
  <SearchIcon style={{fontSize: '9vw', color: 'rgba(255,255,255,0.9)', marginBottom: -5}}/>

      <Typed
                 strings={[
                     'Welchen Bot suchst du?',
                     'Stadtführungen?',
                     'Blackstories?',
                   'Suche hier deine Quest!']}
                     typeSpeed={70}
                     backSpeed={90}
                     loop >
                 </Typed>
</div>
    : 'Bot suchen...'}



         type="Text"
         onChange={this.searchHandler}
         value={message}
         underlineFocusStyle={{borderColor: '#B00020', borderWidth: 3}}
         underlineStyle={{borderColor: '#B00020', borderWidth: 1.5, top: '45px'}}
         hintStyle={{fontSize: '7.5vw', fontFamily: 'Anton', color: 'rgba(255,255,255,0.8)'}}
         inputStyle={{fontSize: '7.5vw', fontFamily: 'Anton', color: '#ffffff'}}
         ref={(input) => { this.textInput = input; }}
         style={{caretColor: '#ffffff', width: '85%', maginLeft: 'auto', marginRight: 'auto', marginTop: '6%' }}
         />


     </MuiThemeProvider>
   </div>
      </div>
      </Fade>
               ) : (
                 <div>
                   <div style={{width: '100%', marginLeft: 'auto',
    marginRight: 'auto', marginBottom: 70 }}>

      <div style={{backgroundImage: 'url(' + imageUrl + ')'}} className="cityDesktop">

  <MuiThemeProvider>

                   <TextField
                        hintText="Welcher Bot darf es sein?"
                        type="Text"
                        onChange={this.searchHandler}
                        value={message}
                        fullWidth={true}
                        underlineFocusStyle={{borderColor: '#B00020', borderWidth: 3, top: '95px' }}
                        underlineStyle={{borderColor: '#B00020', borderWidth: 1.5, top: '95px' }}
                        hintStyle={{fontSize: '4em', fontFamily: 'Anton', color: 'rgba(255,255,255,0.9)'}}
                        inputStyle={{fontSize: '4em', fontFamily: 'Anton',  color: '#ffffff'}}
                        ref={(input) => { this.textInput = input; }}
                        style={{caretColor: '#B00020', marginTop: '6%', width: '80%', height: '12vh'}}
                        />
                    </MuiThemeProvider>
                  </div>

                   </div>
                     </div>

               )
             }
           </Media>


   <Media query="(max-width: 599px)">
     {matches =>
       matches ? (

    <InfiniteScroll
       pageStart={1}
       loadMore={this.loadContent}
       hasMore={this.state.hasMoreItems}
       initialLoad={false}
      >
      <Media query="(min-width: 375px)">
        {matches =>
          matches ? (
      <StackGrid
   columnWidth={170}
   gutterHeight={20}
   gutterWidth={20}
   duration={1500}
   monitorImagesLoaded={true}
   easing={easings.quadInOut}
   appear={scaleDown.appear}
   appeared={scaleDown.appeared}
   enter={scaleDown.enter}
   entered={scaleDown.entered}
   leaved={scaleDown.leaved}

  >
   {items}
 </StackGrid> ):(
   <StackGrid
 columnWidth={150}
 gutterHeight={10}
 gutterWidth={10}
 duration={1500}
 monitorImagesLoaded={true}
 easing={easings.quadInOut}
 appear={scaleDown.appear}
 appeared={scaleDown.appeared}
 enter={scaleDown.enter}
 entered={scaleDown.entered}
 leaved={scaleDown.leaved}

 >


 {items}
 </StackGrid>



 )
  }
</Media>
         </InfiniteScroll>
       ) : (


     <InfiniteScroll
       pageStart={1}
       loadMore={this.loadContent}
       hasMore={this.state.hasMoreItems}
       initialLoad={true}

      >
      <StackGrid
        columnWidth={180}
   gutterHeight={80}
   gutterWidth={80}
   duration={1500}
   monitorImagesLoaded={true}
   easing={easings.quadInOut}
   appear={scaleDown.appear}
   appeared={scaleDown.appeared}
   enter={scaleDown.enter}
   entered={scaleDown.entered}
   leaved={scaleDown.leaved}

    >

              {items}
            </StackGrid>
         </InfiniteScroll>
       )
     }
   </Media>



</div>
    )
  }
}

export default ViewAll;
