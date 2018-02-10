import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

import "./header.css";
import logo from "../../logo.svg";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Express-React-Blueprint</h1>
  </header>
);

export default Header;
