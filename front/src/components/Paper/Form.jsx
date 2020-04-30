import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = (props) => {
  return (
    <form className="siimple-form" onSubmit={props.handleAdd}>
      <div className="siimple-form-field">
        <StyledTextField required id="filled-basic" name="title" label="URL" variant="filled"/>
        <StyledButton type="submit" variant="contained">Send</StyledButton>
      </div>
    </form>
  );
}

const StyledTextField = styled(TextField)`
  border-radius: 5px;
  background-color: #dde5ee;
  margin-right: 6px;
`;

const StyledButton = styled(Button)`
  height: 54px;
  color: #e0e0e0;
  background-color: #3f51b5;

  &:hover {
    opacity: 0.5;
    color: black;
  }
`;

export default Form;
