import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./stores";

import { Input } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Express-React-Blueprint</h1>
      </header>
      <div className="ui grid">
        <div className="row">
          <div className="four wide column" />
          <div className="eight wide column">
            <Input
              fluid
              className="example-input"
              label="http://localhost:3000/"
              placeholder="github/username"
              action={{ color: "teal", content: "Submit" }}
            />
          </div>
          <div className="four wide column" />
        </div>
        <div className="row">
          <div className="four wide column" />
          <div className="eight wide column">
            <div className="ui segment code-block">
              <code>some code</code>
            </div>
          </div>
          <div className="four wide column" />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
