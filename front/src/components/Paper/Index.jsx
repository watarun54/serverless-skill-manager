import React from 'react';
import styled from 'styled-components';
import Pagination from "material-ui-flat-pagination";

import Form from './Form';
import PaperList from './List';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiimpleBox className="siimple-box siimple--bg-dark" >
        <Form handleAdd={this.props.handleAdd}/>
        <div className="siimple-rule"></div>
        <PaperList todos={this.props.todo} offset={this.props.offset} parPage={this.props.parPage} handleDelete={this.props.handleDelete}/>
        {this.props.todo.length > this.props.parPage &&
        <StyledPagination
          limit={this.props.parPage}
          offset={this.props.offset}
          total={this.props.todo.length}
          onClick={(e, offset) => this.props.handleClickPagination(offset)}
          reduced={true}
          size={'small'}
        />
        }
      </SiimpleBox>
    );
  }
}

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
