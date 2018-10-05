import React from 'react';
import '../App.css';
import Item from '../components/Item';
import { Container, Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import Hero from '../components/Hero';
import Conversation from 'chat-template/dist/Conversation';
import messages from '../components/Messages';


var TitleList = React.createClass({

    apiKey: '87dfa1c669eea853da609d4968d294be',
    getInitialState: function() {
        return {data: [], mounted: false};
    },
    loadContent: function() {
        var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
        fetch(requestUrl).then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({data : data});
        }).catch((err)=>{
            console.log("There has been an error");
        });
    },
    componentWillReceiveProps : function(nextProps){
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
            this.setState({mounted:true,url:nextProps.url},()=>{
                this.loadContent();
            });

        }
    },
    componentDidMount: function() {
        if(this.props.url !== ''){
            this.loadContent();
            this.setState({mounted:true});

        }

    },
    toggle: function() {
        this.setState({ collapse: !this.state.collapse });
    },


    render: function() {

        var titles ='';
        if(this.state.data.results) {
            titles = this.state.data.results.map(function(title, i) {
                if(i < 5) {
                    var name = '';
                    var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if(!title.name) {
                        name = title.original_title;
                    } else {
                        name = title.name;
                    }

                    return (
                        <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
                    );

                }else{
                    return (<div key={title.id}></div>);
                }
            });

        }

        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper" onClick={this.toggle}>
                        {titles}
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>

                            <Conversation height={300} messages={messages}/>

                </Collapse>
            </div>
        );
    }
});

export default TitleList;