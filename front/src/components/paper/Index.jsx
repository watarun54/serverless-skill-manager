import React from 'react';
import styled from 'styled-components';
import Pagination from "material-ui-flat-pagination";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

import Form from './Form';
import PaperList from './List';

class PaperIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item s={12} md={10}>
        <SiimpleBox className="siimple-box siimple--bg-dark" >
          <Form/>
          <div className="siimple-rule"></div>
          <PaperList offset={this.props.offset} parPage={this.props.parPage}/>
          {this.props.paper.paperList.length > this.props.parPage &&
            <Grid item s={12} md={9}>
              <StyledPagination
                limit={this.props.parPage}
                offset={this.props.offset}
                total={this.props.paper.paperList.length}
                onClick={(e, offset) => this.props.handleClickPagination(offset)}
                reduced={true}
                size={'small'}
              />
            </Grid>
          }
        </SiimpleBox>
      </Grid>
    );
  }
}

const SiimpleBox = styled.div`
  min-height: 550px;
  margin-bottom: 0;
  width: 100%;
`;

const StyledPagination = styled(Pagination)`
  background-color: white;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
`;

export default connect(state => (
  {
    paper: state.paper,
  }
))(PaperIndex)
