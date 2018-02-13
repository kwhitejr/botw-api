import React from "react";
import RequestBlock from "../../components/request-block";
import Header from "../../components/header";

const title = "API of the Wild";
const subtitle = "The RESTful BOTW Resource";

const Home = () => (
  <div>
    <Header title={title} subtitle={subtitle} />
    <RequestBlock />
  </div>
);

export default Home;
