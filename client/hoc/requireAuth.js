import React, { Component } from "react";
import userQuery from "../queries/currentUser";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      if (this.props.data.loading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(userQuery)(RequireAuth);
};
