import React, { Component } from "react";
import { graphql } from "react-apollo";
import userQuery from "../queries/currentUser";
import { Link } from "react-router";
import logoutMutation from "../mutations/logout";

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: userQuery }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return null;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    }

    return (
      <div>
        <li>
          <Link to="/signup" className="">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" className="">
            Login
          </Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logoutMutation)(graphql(userQuery)(Header));
