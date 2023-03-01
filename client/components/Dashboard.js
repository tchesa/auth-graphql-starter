import React, { Component } from "react";
import requireAuth from "../hoc/requireAuth";

class Dashboard extends Component {
  render() {
    return <h3>Dashboard</h3>;
  }
}

export default requireAuth(Dashboard);
