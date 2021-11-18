import React, { Fragment } from "react";
import Table from "../components/Table";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Header tittle="All Contact" />
      <div className="container d-flex pb-5 justify-content-center">
        <Link to="/add" className="btn btn-success">
          Add Contact
        </Link>
      </div>
      <Table />
    </Fragment>
  );
};

export default Home;
