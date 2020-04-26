import React, { Component } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => (
  <SiimpleList className="siimple-list">
    {props.todos.slice(props.offset, props.offset + props.parPage).map((todo, i) => {
      return (
        <SiimpleListItem key={i} className="siimple-list-item siimple--bg-white">
          {todo.title}
          <DeleteButton aria-label="delete" onClick={() => props.handleDelete(i)}>
            <DeleteIcon />
          </DeleteButton>
        </SiimpleListItem>
      );
    })}
  </SiimpleList>
);

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

export default List;
