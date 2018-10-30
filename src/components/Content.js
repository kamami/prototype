import React from 'react';
import TitleList from '../components/TitleList';


class Content extends React.Component{

  constructor(props){
    super(props);
    this.state={
      hidden: 'hidden'
    }
  }

  componentDidMount() {
      var that = this;
      setTimeout(function() {
          that.show();
      }, that.props.wait);
  }


  show() {
      this.setState({hidden : ""});
  }
    render() {


        return (

            <div className={this.state.hidden}>
            <TitleList title="New" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/14'/>
            <TitleList title="Trending" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/5' />
            <TitleList title="Ranking" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/14' />
            <TitleList title="Messenger Exclusive" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/5' />
            <TitleList title="Most Viewed" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/14' />

            </div>







        );
    }
}

export default Content;
