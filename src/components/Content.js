import React from 'react';
import '../App.css';

import InfiniteScroll from 'react-infinite-scroller';
import StackGrid, {transitions} from "react-stack-grid";
import * as easings from '../components/easings';
import Media from "react-media";

const { scaleDown } = transitions;



class Content extends React.Component {




  render() {

    return (

      <div style={{marginTop: 5}}>


<Media query="(max-width: 599px)">
{matches =>
  matches ? (

<InfiniteScroll
  pageStart={1}
  loadMore={this.props.loadContent}
  hasMore={this.props.hasMoreItems}
  initialLoad={false}
 >
 <Media query="(min-width: 375px)">
   {matches =>
     matches ? (
 <StackGrid
columnWidth={170}
gutterHeight={20}
gutterWidth={20}
duration={1500}
monitorImagesLoaded={true}
easing={easings.quadInOut}
appear={scaleDown.appear}
appeared={scaleDown.appeared}
enter={scaleDown.enter}
entered={scaleDown.entered}
leaved={scaleDown.leaved}

>
{this.props.items}
</StackGrid> ):(
<StackGrid
columnWidth={150}
gutterHeight={10}
gutterWidth={10}
duration={1500}
monitorImagesLoaded={true}
easing={easings.quadInOut}
appear={scaleDown.appear}
appeared={scaleDown.appeared}
enter={scaleDown.enter}
entered={scaleDown.entered}
leaved={scaleDown.leaved}

>


{this.props.items}
</StackGrid>



)
}
</Media>
    </InfiniteScroll>
  ) : (


<InfiniteScroll
  pageStart={1}
  loadMore={this.props.loadContent}
  hasMore={this.props.hasMoreItems}
  initialLoad={true}

 >
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

         {this.props.items}
       </StackGrid>
    </InfiniteScroll>
  )
}
</Media>

</div>

    );
  }
}


export default Content;
