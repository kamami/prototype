import React from 'react';
import '../App.css';
import Item from '../components/Item';




var TitleList = React.createClass({

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


    componentDidMount: function() {
        if(this.props.url !== ''){
            this.loadContent();
            this.setState({mounted:true});

        }

    },


    render: function() {

            var titles = this.state.data.map(function(title) {


                    return (

                    <Item key={title.id} title={title.title} score={title.vote_average} overview={title.body} backdrop={title.image} />
                );


            })



        return (
            <div className="TitleList" data-loaded={this.state.mounted}>

                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper">
                          <div className="title-row">
                        {titles}
                        </div>

                    </div>
                </div>

            </div>
        );
    }
});

export default TitleList;
