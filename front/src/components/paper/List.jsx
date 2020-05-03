import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from "react-redux";

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";

import { getPapers, deletePaper } from '../../actions/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  list: {
    backgroundColor: '#dde5ee',
    borderRadius: '5px',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
});


class PaperList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.dispatch(getPapers());
  }

  handleDelete = idx => {
    const id = this.props.paper.paperList[idx].id
    this.props.dispatch(deletePaper(id))
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item s={12} md={8}>
        <div className={classes.list}>
          <List dense={true}>
            {this.props.paper.paperList.slice(this.props.offset, this.props.offset + this.props.parPage).map((paper, i) => {
              return (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Link href={paper.url} rel="noopener" target="_blank" rel="noopener">
                      {paper.text}
                    </Link>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(i)}>
                      <DeleteIcon style={{color: '#ee675d'}} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(state => (
    {
      user: state.user,
      paper: state.paper,
    }
  )
))(PaperList)
