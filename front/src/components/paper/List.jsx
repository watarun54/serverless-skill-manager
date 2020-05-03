import React, { Component } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';

import { connect } from "react-redux";
import { getPapers, deletePaper } from '../../actions/Paper';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getPapers());
  }

  handleDelete = idx => {
    const id = this.props.paper.paperList[idx].id
    this.props.dispatch(deletePaper(id))
  }

  render() {
    return (
      <SiimpleList className="siimple-list">
        {this.props.paper.paperList.slice(this.props.offset, this.props.offset + this.props.parPage).map((paper, i) => {
          return (
            <SiimpleListItem key={i} className="siimple-list-item siimple--bg-white">
              <Link href={paper.url} rel="noopener" target="_blank" rel="noopener">
                {paper.text}
              </Link>
              <DeleteButton aria-label="delete" onClick={() => this.handleDelete(i)}>
                <DeleteIcon />
              </DeleteButton>
            </SiimpleListItem>
          );
        })}
      </SiimpleList>
    );
  }
}

const SiimpleList = styled.ul`
  display: inline;
`;

const SiimpleListItem = styled.li`
  max-width: 800px;
`;

const DeleteButton = styled.span`
  cursor: pointer;
  color: #ee675d;
  float: right;
`;

export default connect(state => (
  {
    user: state.user,
    paper: state.paper,
  }
))(List)