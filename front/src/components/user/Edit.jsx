import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles";

import { compose } from 'redux'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../actions/User";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/watarun54">
        watarun54
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  errMsg: {
    color: '#f50057',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: null
    };
  }

  componentWillReceiveProps = nextState => {
    if (!nextState.user.token) {
      this.props.history.push("/login");
    } else if (nextState.user.errMsg.length > 0) {
      this.setState({ "message": nextState.user.errMsg });
    }
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onEdit = e => {
    e.preventDefault();

    let name = e.target.name.value;

    if (name) {
      this.setState({ "message": null });
      this.props.dispatch(updateUser(name));
      this.setState({ "message": `「${name}」に変更されました` });
    } else {
      this.setState({ "message": "Nameを入力してください" });
    }
  }

  onDelete = () => {
    this.props.dispatch(deleteUser());
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Setting
          </Typography>
          <form className={classes.form} onSubmit={this.onEdit}>
            <Box component="span" display="block" className={classes.errMsg}>{this.state.message}</Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  defaultValue={this.props.user.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={this.handleClickOpen}
                >
                  Delete
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">本当にアカウントを削除しますか？</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      アカウントを削除すると、アカウントに紐付く情報は完全に削除され、復元できなくなります。
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={this.onDelete} color="secondary">
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

Edit.contextTypes = {
  router: PropTypes.object
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(state => (
    { user: state.user }
  )
))(withRouter(Edit))
