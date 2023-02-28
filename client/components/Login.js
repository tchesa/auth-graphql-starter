import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo";
import loginMutation from "../mutations/login";
import userQuery from "../queries/currentUser";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    };
  }

  handleSubmit(email, password) {
    this.setState({
      errors: [],
    });

    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: userQuery }],
      })
      .catch((error) => {
        this.setState({
          errors: error.graphQLErrors.map((e) => e.message),
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(loginMutation)(Login);
