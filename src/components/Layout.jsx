import React, { Fragment } from "react";
import Table from "./Table";

const Layout = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <Table />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
