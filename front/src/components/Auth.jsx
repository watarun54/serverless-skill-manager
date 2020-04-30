import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from "react-redux";

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.checkAuth();
  }

  componentWillUpdate() {
    this.checkAuth();
  }

  checkAuth() {
    // ログインしてなければログイン画面へとばす
    if (!this.props.user.session) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

Auth.contextTypes = {
  router: PropTypes.object
};

const connectedAuth = connect(state => ({
  user: state.user
}))(Auth);

export default withRouter(connectedAuth);
