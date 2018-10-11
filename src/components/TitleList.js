import React from 'react';
import '../App.css';
import Item from '../components/Item';
import {Collapse, Card} from 'reactstrap';

import Drop from '../components/Tabs';



var TitleList = React.createClass({

    apiKey: '87dfa1c669eea853da609d4968d294be',
    getInitialState: function() {
        return {data: [], mounted: false};
    },
    loadContent: function() {
        var requestUrl = this.props.url;
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

            var titles = this.state.data.map(function(title, i) {
                if(i < 5) {

                    return (
                    <Item key={title.id} title={title.title} score={title.vote_average} overview={title.body} backdrop={title.image} />
                );
                }else{
                    return (<div key={title.id}></div>);
                }


            })

        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper" onClick={this.toggle}>

                        {titles}
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>


<Drop/>


                </Collapse>
            </div>
        );
    }
});

export default TitleList;