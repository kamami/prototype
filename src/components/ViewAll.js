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


const { scaleDown } = transitions;





function searchingFor(term){
return function(x){
return x.title.toLowerCase().includes(term.toLowerCase()) ||
x.body.toLowerCase().includes(term.toLowerCase());

}
 }


class ViewAll extends React.Component{

constructor(props){
  super(props);
  this.state = {
    term: '',
    mounted: true,
    tracks: [],
    hasMoreItems: true,
    page: 2

  }

  this.searchHandler = this.searchHandler.bind(this);
  this.focus = this.focus.bind(this);

 }

  loadContent() {
    var requestUrl = this.props.url;
    fetch(requestUrl + '/page' + this.state.page).then((response)=>{
        return response.json();
    }) .then((tracks)=>{
        this.setState({ tracks: this.state.tracks.concat(tracks)});
        this.setState({page: this.state.page + 1});

        if(this.state.page == 4){
          this.setState({hasMoreItems: false})
        }
    }).catch((err)=>{
        console.log("There has been an error");
    });
}

componentDidMount() {
var requestUrl = this.props.url;



fetch(requestUrl + '/page1').then((response)=>{
    return response.json();
}) .then((data)=>{
    this.setState({tracks : data});

})
.catch((err)=>{
    console.log("There has been an error");
});
window.scrollTo(0, 0);
//this.focus();

 }

  searchHandler(event){
    this.setState({term: event.target.value
    })
  }

   focus() {
   this.textInput.focus();
 }

render() {

  const {term, data, tracks} = this.state;

  const loader = <div className="loader"></div>;

  var items = [];
  const imageUrl = require(`../assets/City.jpg`)

  tracks.filter(searchingFor(term)).map(function(title, i)
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
            twitter={title.twitter}
            discord={title.discord}
            slack={title.slack}
            kik={title.kik}
            telegram={title.telegram}

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

<div style={{backgroundImage: 'url(' + imageUrl + ')', marginBottom: 10}} className="city">



  <MuiThemeProvider>

    <TextField
         hintText={this.props.drawerOpen === false ? 'Welcher Bot darf es sein?' : 'Bot suchen...'}

         type="Text"
         onChange={this.searchHandler}
         value={term}
         underlineFocusStyle={{borderColor: '#B00020', borderWidth: 3}}
         underlineStyle={{borderColor: '#B00020', borderWidth: 1.5, top: '45px'}}
         hintStyle={{fontSize: '8.7vw', fontFamily: 'Anton', color: 'rgba(255,255,255,0.9)'}}
         inputStyle={{fontSize: '8.7vw', fontFamily: 'Anton', color: '#ffffff'}}
         ref={(input) => { this.textInput = input; }}
         style={{caretColor: '#B00020', width: '90%', maginLeft: 'auto', marginRight: 'auto', marginTop: '12%' }}
         InputLabelProps={{ shrink: true }}
         />


     </MuiThemeProvider>

        </div>
      </Fade>
               ) : (
                 <div style={{marginTop: 70}}>
                   <div style={{width: '80%', marginLeft: 'auto',
    marginRight: 'auto', marginBottom: 70 }}>

      <div style={{backgroundImage: 'url(' + imageUrl + ')'}} className="city">

  <MuiThemeProvider>

                   <TextField
                        hintText="Welcher Bot darf es sein?"
                        type="Text"
                        onChange={this.searchHandler}
                        value={term}
                        fullWidth={true}
                        underlineFocusStyle={{borderColor: '#B00020', borderWidth: 3}}
                        underlineStyle={{borderColor: '#B00020', borderWidth: 1.5, top: '50px'}}
                        hintStyle={{fontSize: '8.7vw', fontFamily: 'Anton', color: 'rgba(255,255,255,0.9)'}}
                        inputStyle={{fontSize: '8.7vw', fontFamily: 'Anton',  color: '#ffffff'}}
                        ref={(input) => { this.textInput = input; }}
                        style={{caretColor: '#B00020', marginTop: 80, width: '90%'}}
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
       loadMore={this.loadContent.bind(this)}
       hasMore={this.state.hasMoreItems}
       loader={loader}
       initialLoad={false}
      >

      <StackGrid
        columnWidth={180}
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
         </InfiniteScroll>
       ) : (


     <InfiniteScroll
       pageStart={10}
       loadMore={this.loadContent.bind(this)}
       hasMore={this.state.hasMoreItems}
       loader={loader}
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
