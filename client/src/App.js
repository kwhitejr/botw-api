import React from "react";
import { Provider } from "react-redux";

import configureStore from "./stores";

import RequestBlock from "./components/request-block";
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
      <RequestBlock />
    </div>
  </Provider>
);

export default App;
