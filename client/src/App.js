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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input
          size="big"
          className="App-intro"
          label="http://localhost:3000"
          placeholder="/github/:userName"
          action={{ color: "teal", content: "Submit" }}
        />
      </div>
    );
  }
}

export default App;
