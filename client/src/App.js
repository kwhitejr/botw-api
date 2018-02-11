import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { configureStore } from "./stores";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./containers/home";
import About from "./containers/about";
import Documentation from "./containers/documentation";
import logo from "./logo.svg";
import "./App.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/documentation" component={Documentation} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
);

export default App;
