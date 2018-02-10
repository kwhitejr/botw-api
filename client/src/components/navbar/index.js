import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const Navbar = () => (
  <div className="ui menu attached inverted">
    <div className="right menu">
      <a className="item">Home</a>
      <a className="item">About</a>
      <a className="item">Documentation</a>
    </div>
  </div>
);

export default Navbar;
