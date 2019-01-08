import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const variantIcon = {
  success: CheckCircleIcon,

  error: ErrorIcon,
};

const styles1 = theme => ({

  success: {
    backgroundColor: '#00C9B7',
  },

  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const {classes, className, message, onClose, variant, ...other  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class SuccessMessages extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });

  };

  render() {
    const { classes } = this.props;

    return (
      <div>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={this.props.openError}
          autoHideDuration={5000}
          onClose={this.props.closeSnackbar}

        >
          <MySnackbarContentWrapper
            onClose={this.props.closeSnackbar}
            variant="success"
            message={this.props.error}
          />
        </Snackbar>


      </div>
    );
  }
}

SuccessMessages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles2)(SuccessMessages);
