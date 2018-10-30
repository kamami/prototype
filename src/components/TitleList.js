import React from 'react';
import '../App.css';
import Item from '../components/Item';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import StackGrid, {transitions} from "react-stack-grid";
import * as easings from '../components/easings';

const { scaleDown } = transitions;

class TitleList extends React.Component{

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
        window.scrollTo(0, 0)

    }


    render() {

            var titles = this.state.data.map(function(title) {
                    return (
                      <div style={{width: 180, marginRight: 80, marginLeft: 10, marginTop: 10, marginBottom: 10}}>
                        <MuiThemeProvider>
                          <Paper style={{ borderRadius: "2em",
                            background: 'linear-gradient(to right, #82f2da 30%, white 100%)'
                          }} zDepth={1} >

                      <div key={title.id}>
                    <Item
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
                      message1={title.message1}
                      position1={title.position1}
                      message2={title.message2}
                      position2={title.position2}
                      message3={title.message3}
                      position3={title.position3}
                      message4={title.message4}
                      position4={title.position4}
                      message5={title.message5}
                      position5={title.position5}
                      message6={title.message6}
                      position6={title.position6}
                      message7={title.message7}
                      position7={title.position7}
                      message8={title.message8}
                      position8={title.position8}

                        />
                  </div>
                </Paper>
                </MuiThemeProvider>
                </div>
                );
            })



        return (
          <div className="TitleList" data-loaded={this.state.mounted}>
            <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 70 }}>

                    <p style={{fontFamily: 'Anton', fontSize: 40}}>{this.props.title}</p>

                    <div className="Scroller">


                          {titles}


                  </div>

                  </div>
            </div>
        );
    }
};

export default TitleList;
