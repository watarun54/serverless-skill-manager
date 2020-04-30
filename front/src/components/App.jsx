import React, { Component } from 'react';

import Container from './Container';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      offset: 0,
      parPage: 10,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClickPagination = this.handleClickPagination.bind(this);
  }

  handleAdd = e => {
    e.preventDefault();
    this.state.todo.unshift({title: e.target.title.value});
    this.setState({todo: this.state.todo});
    e.target.title.value = '';
  }

  handleDelete = i => {
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo});
  }

  handleClickPagination = offset => {
    this.setState({ offset })
  }

  componentWillMount = () => {
    // init data
    for (let i=0; i<100; i++ ) {
      this.state.todo.unshift({title: "todo item " + i});
    }
  }

  render() {
    return (
      <div>
        <Container
          todo={this.state.todo}
          offset={this.state.offset}
          parPage={this.state.parPage}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handleClickPagination={this.handleClickPagination}
        />
      </div>
    );
  }
}
