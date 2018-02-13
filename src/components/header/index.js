import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

import "./header.css";
import logo from "../../logo.svg";

const Header = ({ title, subtitle }) => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="title">{title}</h1>
    <h1 className="subtitle">{subtitle}</h1>
  </header>
);

export default Header;
