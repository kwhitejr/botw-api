import React from "react";
import RequestBlock from "../../components/request-block";
import Header from "../../components/header";

const title = "Welcome to Express-React-Blueprint";

const Home = () => (
  <div>
    <Header title={title} />
    <RequestBlock />
  </div>
);

export default Home;
