import axios from "axios";
import React, { Component } from "react";
import TableData from "./TableData";

class Table extends Component {
  state = {
    loading: false,
    contactList: [],
  };

  async fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ contactList: json });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidMount() {
    // this.fetchData();
    // console.log("Mounted");

    // axios
    this.getUserAPI();
    this.setState({ loading: true });
  }

  eventHandlerRemove = (contact) => {
    console.log(contact);
    axios.delete(`http://localhost:3001/profile/${contact}`).then((respond) => {
      this.getUserAPI();
    });
  };

  getUserAPI = () => {
    axios.get("http://localhost:3001/profile").then((respond) => {
      console.log(respond.data);
      this.setState({ contactList: respond.data });
    });
    this.setState({ loading: true });
  };

  render() {
    const { contactList } = this.state;
    if (this.state.loading) {
      return (
        <div>
          <table className="table table-stripped" width="100%">
            <thead className="">
              <tr>
                <th>#</th>
                <th className="col-2">Name</th>
                <th className="col-2">Username</th>
                <th className="col-3">Phone Number</th>
                <th className="col-3">Email</th>
                <th className="col-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((contact) => {
                return (
                  <TableData
                    key={contact.id}
                    data={contact}
                    remove={this.eventHandlerRemove}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="mx-auto">
          <p className="text-center">Loading</p>
        </div>
      );
    }
  }
}

export default Table;
