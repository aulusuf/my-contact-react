import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Table from "./components/Table";
// import axios from "axios";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header tittle="All Contact" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <Table />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
