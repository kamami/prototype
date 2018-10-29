import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ItemViewAll from '../components/ItemViewAll';
import StackGrid, {transitions} from "react-stack-grid";
import Paper from 'material-ui/Paper';
import * as easings from '../components/easings';
import TextField from 'material-ui/TextField';

const { scaleDown } = transitions;


function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || x.body.toLowerCase().includes(term.toLowerCase());

  }
}


class ViewAll extends React.Component{


    constructor(props){
      super(props);
      this.state = {
        term: '',
        data: [],
        mounted: false
      }
      this.searchHandler = this.searchHandler.bind(this);

    }


      loadContent() {
          var requestUrl = this.props.url;
          fetch(requestUrl).then((response)=>{
              return response.json();
          }).then((data)=>{
              this.setState({data : data});
          }).catch((err)=>{
              console.log("There has been an error");
          });
      }

      componentWillReceiveProps(nextProps){
          if(nextProps.url !== this.props.url && nextProps.url !== ''){
              this.setState({mounted:true,url:nextProps.url},()=>{
                  this.loadContent();
              });

          }
      }


      componentDidMount() {
          if(this.props.url !== ''){
              this.loadContent();
              this.setState({mounted:true});

          }

      }

      searchHandler(event){
        this.setState({term: event.target.value

        })
      }

    render() {

      const {term, data} = this.state;


      var titles = data.filter(searchingFor(term)).map(function(title, i) {
              return (
                <div>
                  <MuiThemeProvider>
                    <Paper style={{ borderRadius: "2em",
                      background: 'linear-gradient(to right, #82f2da 30%, white 100%)'
                    }} zDepth={1} >

                <div key={title.id}>
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
            </div>
          </Paper>
          </MuiThemeProvider>
          </div>
          );
      })

        return (

            <div style={{marginTop: 100}}>
              <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 40 }}>
                <MuiThemeProvider>
                  <TextField
                       hintText="Welcher Bot darf es sein?"
                       type="Text"
                       onChange={this.searchHandler}
                       value={term}
                       fullWidth={true}
                    underlineFocusStyle={{borderColor: '#82f2da', borderWidth: 2.5}}
                    underlineStyle={{borderColor: '#82f2da', borderWidth: 1}}
                    hintStyle={{fontSize: 30}}
                    inputStyle={{fontSize: 30}}




                     />

                </MuiThemeProvider>

              </div>

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


               {titles}
               </StackGrid>

             </div>


        )
      }
    }

export default ViewAll;
