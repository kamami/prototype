import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import CheckIcon from '@material-ui/icons/CheckCircle';
import InfiniteScroll from 'react-infinite-scroller';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopy from '@material-ui/icons/FileCopy';
import KeyListItem from '../components/KeyListItem';
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginTop: 56
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
  fetch(requestUrl + '1&_limit=14')
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
   fetch(requestUrl + this.state.page + '&_limit=14').then((response)=>{
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
    const { secondary, bots } = this.state;
    const loader = <div className="loader"> </div>;



    var items = [];

    bots.map(function(title, i){

      items.push(
        <KeyListItem
          image={title.image}
          title={title.title}
          code={title.key}
          key={title.id}
          />
      );
    }, this);

    return (
      <div className={classes.root}>



            < div className={classes.demo}>

              <List >

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
