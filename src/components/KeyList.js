import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InfiniteScroll from 'react-infinite-scroller';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import KeyListItem from '../components/KeyListItem';
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: 56,

  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    overflowY: true
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});





class KeyList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      term: '',
      dense: false,
      secondary: false,
      bots: [],
      hasMoreItems: true,
      page: 2,
      loading: true,
      open: false

    }
  }


componentDidMount() {
    window.scrollTo(0, 0);


  var requestUrl = 'https://questdb.herokuapp.com/all?_page=';
  fetch(requestUrl + '1&_limit=14' + '&select=true')
      .then((response)=>{
      return response.json();
  }) .then((data)=>{
      this.setState({bots : data,
        loading: false});

  })
  .catch((err)=>{
      console.log("There has been an error");
  });

  //this.focus();

   }




 loadContent() {

   var requestUrl = 'https://questdb.herokuapp.com/all?_page=';
   fetch(requestUrl + this.state.page + '&_limit=14' + '&select=true').then((response)=>{
       return response.json();
   }) .then((bots)=>{
       this.setState({ bots: this.state.bots.concat(bots)});
       this.setState({hasMoreItems: false})
       this.setState({page: this.state.page + 1});

   }).then( (page)=> {

     if(this.state.page === 2){
       this.setState({hasMoreItems: false})

    }

   }).catch((err)=>{
       console.log("There has been an error");
   });
}


handleClickOpen = () => {

  this.setState({ open: true});
};


handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  this.setState({ open: false });
};







  render() {
    const { classes } = this.props;
    const { bots } = this.state;



    var items = [];

    bots.map(function(title, i){

      items.push(
        <KeyListItem
          key={title.id}
          title={title.title}
          score={title.vote_average}
          overview={title.body}
          image={title.image}
          description={title.description}
          messenger={title.messenger}
          twitter={title.twitter}
          discord={title.discord}
          slack={title.slack}
          kik={title.kik}
          telegram={title.telegram}
          code={title.key}
          matchId={title.matchId}
          match={title.match}
          />
      );
    }, this);

    return (
      <div className={classes.root}>



            < div className={classes.demo}>

              <List style={{width: '100vw'}}>

                    <InfiniteScroll
                      initialLoad={false}
                      loadMore={this.loadContent.bind(this)}
                      hasMore={this.state.hasMoreItems}
                     >

              {items}
              </InfiniteScroll>


              </List>
              </div>

              {this.state.loading &&
                <Dialog
                      open={true}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      fullScreen
                      PaperProps={{


                style: {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: 'none',
                },
                }}
                    >
                    <DialogContent >
                      <div  style={{display: 'flex'}}>

                      <div  className="loader" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '100%'}}>

                      </div>
                    </div>
                    </DialogContent>
                  </Dialog>

            }






      </div>
    );
  }
}

KeyList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyList);
