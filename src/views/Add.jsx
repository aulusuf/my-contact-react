import React, { Fragment } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <Fragment>
      <Header tittle="Add Contact" />
      <form className="container col-8">
        <div class="form-group mb-3">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control mt-2"
            id="formGroupExampleInput"
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="formGroupExampleInput2">Username</label>
          <input
            type="text"
            class="form-control mt-2"
            id="formGroupExampleInput2"
            placeholder="Username"
          />
        </div>
        <div class="form-group mb-3">
          <label for="formGroupExampleInput2">Phone</label>
          <input
            type="text"
            class="form-control mt-2"
            id="formGroupExampleInput2"
            placeholder="Phone Number"
          />
        </div>
        <div class="form-group mb-3">
          <label for="formGroupExampleInput2">Email</label>
          <input
            type="text"
            class="form-control mt-2"
            id="formGroupExampleInput2"
            placeholder="Email"
          />
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
          <button className="btn btn-primary">Add Contact</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Add;
