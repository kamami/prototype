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
      }
});
    }

    updateMessage = message => this.setState({ message });

   focus() {
   this.textInput.focus();
 }




render() {



  const {message, data, tracks} = this.state;


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

                <div>




                      <Card className="ItemViewAll" style={{backgroundImage: 'url(' + title.image + ')', boxShadow: 'none'}}>
                        {title.select &&
                        <div style={{display: 'flex', width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.9)', height: 36, marginTop: -1 }}>
                          <p style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '1%', marginBottom: '1%', fontFamily: 'Pacifico', color: '#00C9B7', fontSize: '1.4em', lineHeight: '1.6'}}> Fable Select</p>
                        </div>
                        }

                    <div className="overlay" onClick = {()=> {history.push('/bots/' + title.id)}}>
                      </div>


                </Card>




                      <div className="BreakWords" style={{fontSize: 17, marginTop: 20, fontFamily: 'Anton', color: '#484F58'}}  onClick = {()=> {history.push('/bots/' + title.id)}}>
                        {title.title}
                      </div>
                      <div className="BreakWords" style={{fontSize: 13, marginTop: 10, paddingBottom: 20, fontWeight: 'lighter', color: '#484F58'}}  onClick = {()=> {history.push('/bots/' + title.id)}}>
                        {title.body}
                      </div>
                      <div >


                        <a href={title.messenger} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Button variant="contained" style={{backgroundColor: '#3b5998', width: '100%',
                          color: '#ffffff', boxShadow: 'none', borderRadius: "0em 0em 2em 2em", Top: 100}}>
                        Facebook
                        <img src={require("../assets/facebookicon.png")} style={{heigth: 20, width: 20, marginLeft: 10}} alt="facebookicon"/>
                        </Button>
                      </a>

                    </div>



                  </div>

      </Paper>
      </MuiThemeProvider>
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
                     'Welchen Bot suchst du?',
                     'Stadtführungen?',
                     'Blackstories?',
                   'Suche hier deine Quest!']}
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
         <Content items={items} hasMoreItems={this.state.hasMoreItems} loadContent={this.loadContent} />

</div>
    )
  }
}

export default ViewAll;
