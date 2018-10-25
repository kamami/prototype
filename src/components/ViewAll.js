import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ItemViewAll from '../components/ItemViewAll';
import StackGrid, {transitions} from "react-stack-grid";
import Paper from 'material-ui/Paper';





class ViewAll extends React.Component{


    constructor(props){
      super(props);
      this.state = {
        data: [],
        mounted: false
      }
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

    render() {

      var titles = this.state.data.map(function(title) {
              return (
                <div>
                  <MuiThemeProvider>
                    <Paper style={{ borderRadius: "2em",
                      background: 'linear-gradient(to right, #82f2da 30%, white 100%)'
                    }} zDepth={1} square={false} >

                <div key={title.id}>
              <ItemViewAll key={title.id} title={title.title} score={title.vote_average} overview={title.body} backdrop={title.image}
                description={title.description} messengerLink={title.messenger}/>
            </div>
          </Paper>
          </MuiThemeProvider>
          </div>
          );
      })

        return (
            <div style={{marginTop: 100}}>

          <StackGrid
            columnWidth={180}
       gutterHeight={60}
       gutterWidth={60}
       duration={5000}
       monitorImagesLoaded={true}

               >


               {titles}
               </StackGrid>

             </div>


        )
      }
    }

export default ViewAll;
