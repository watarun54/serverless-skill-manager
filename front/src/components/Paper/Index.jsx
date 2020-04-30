import React from 'react';
import styled from 'styled-components';
import Pagination from "material-ui-flat-pagination";

import Form from './Form';
import PaperList from './List';


const Index = (props) => (
  <SiimpleBox className="siimple-box siimple--bg-dark" >
    <Form handleAdd={props.handleAdd}/>
    <div className="siimple-rule"></div>
    <PaperList todos={props.todo} offset={props.offset} parPage={props.parPage} handleDelete={props.handleDelete}/>
    {props.todo.length > props.parPage &&
    <StyledPagination
      limit={props.parPage}
      offset={props.offset}
      total={props.todo.length}
      onClick={(e, offset) => props.handleClickPagination(offset)}
      reduced={true}
      size={'small'}
    />
    }
  </SiimpleBox>
);

const SiimpleBox = styled.div`
  min-height: 550px;
  margin-bottom: 0;
`;

const StyledPagination = styled(Pagination)`
  background-color: white;
  max-width: 800px;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
`;

export default Index;
