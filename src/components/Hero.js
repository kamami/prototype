import React from 'react';
import '../App.css';
import HeroFetch from '../components/HeroFetch';

class Hero extends React.Component{

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

            var heroes = this.state.data.map(function(title) {
                    return (
                    <HeroFetch
                      key={title.id}
                      title={title.title}
                      body={title.body}
                      backdrop={title.img}
                      description={title.description}
                      messenger={title.messenger}
                      twitter={title.twitter}
                      discord={title.discord}
                      slack={title.slack}
                      kik={title.kik}
                      telegram={title.telegram}
                      />
                );
            })



        return (
            <div>

                        {heroes}
                        </div>

        );
    }
};

export default Hero;
