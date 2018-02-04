import React, { Component } from "react";
import { Input } from "semantic-ui-react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
