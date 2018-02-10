import React from "react";
import { Provider } from "react-redux";

import configureStore from "./stores";

import Navbar from "./components/navbar";
import Header from "./components/header";
import RequestBlock from "./components/request-block";
import logo from "./logo.svg";
import "./App.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
      <Header />
      <RequestBlock />
    </div>
  </Provider>
);

export default App;
