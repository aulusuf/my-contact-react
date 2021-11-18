import React, { Fragment, Component } from "react";
import Navbar from "./components/Navbar";
import Add from "./views/Add";
import Detail from "./views/Detail";
import Edit from "./views/Edit";
import Home from "./views/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/add">
                    <Add />
                  </Route>
                  <Route path="/:id">
                    <Detail />
                  </Route>
                  <Route path="/edit/:id">
                    <Edit />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
