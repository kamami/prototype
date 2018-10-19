import React from 'react';
import TitleList from '../components/TitleList';


class Content extends React.Component{
    render() {


        return (
            <div>
            <TitleList title="Die Beliebtesten Chatbots" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9'/>
          <TitleList title="Trending" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
            <TitleList title="Am meisten gespielte Städtetouren" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />
            <TitleList title="Gute Nacht Geschichten" url='//api.jsonbin.io/b/5bbb3f4d295e4356a50a605f/1' />
            <TitleList title="Interaktive Spannung auf der Couch" url='//api.jsonbin.io/b/5bba8ec46d95da7b7a759251/9' />

                      </div>
        );
    }
}

export default Content;
