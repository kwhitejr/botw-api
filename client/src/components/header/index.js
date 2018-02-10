import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const Header = () => (
  <div className="ui menu attached">
    <div className="right menu">
      <a className="item">Home</a>
      <a className="item">About</a>
      <a className="item">Documentation</a>
    </div>
  </div>
);

export default Header;
