import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const Navbar = () => (
  <div className="ui menu attached inverted">
    <div className="right menu">
      <Link className="item" to="/">
        Home
      </Link>
      <Link className="item" to="/about">
        About
      </Link>
      <Link className="item" to="/documentation">
        Documentation
      </Link>
    </div>
  </div>
);

export default Navbar;
