import React from 'react';
import styled from 'styled-components';
import Pagination from "material-ui-flat-pagination";

import Form from './Form';
import PaperList from './List';

import { connect } from "react-redux";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiimpleBox className="siimple-box siimple--bg-dark" >
        <Form/>
        <div className="siimple-rule"></div>
        <PaperList offset={this.props.offset} parPage={this.props.parPage}/>
        {this.props.paper.paperList.length > this.props.parPage &&
        <StyledPagination
          limit={this.props.parPage}
          offset={this.props.offset}
          total={this.props.paper.paperList.length}
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

export default connect(state => (
  {
    paper: state.paper,
  }
))(Index)
