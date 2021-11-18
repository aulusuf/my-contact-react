import React from "react";
import { Link } from "react-router-dom";

const TableData = (props) => {
  return (
    <tr className="align-middle">
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.username}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.email}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Link to={`/${props.data.id}`} className="btn btn-primary">
            Detail
          </Link>
          <Link to={`/edit/${props.id}`} className="btn btn-warning mx-1">
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => props.remove(props.data.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

// class TableData extends React.Component {
//   state = {
//     contactList: [
//       //   {
//       //     id: 1,
//       //     firstName: "Emanuel",
//       //     lastName: "Adebayor",
//       //     phoneNumber: "0842130112",
//       //     email: "Emadeba@mail.id",
//       //   },
//       //   {
//       //     id: 2,
//       //     firstName: "Emanuel",
//       //     lastName: "Adebayor",
//       //     phoneNumber: "",
//       //     email: "Emadeba@mail.id",
//       //   },
//     ],
//   };

//   render() {
//     const { contactList } = this.state;
//     return (
//       <tbody>
//         {contactList.map((contact) => {
//           return (
//             <tr className="align-middle" key={contact.id}>
//               <td>{contact.id}</td>
//               <td>{contact.name}</td>
//               <td>{contact.username}</td>
//               <td>{contact.phone}</td>
//               <td>{contact.email}</td>
//               <td>
//                 <div className="d-flex justify-content-center">
//                   <button className="btn btn-primary">Detail</button>
//                   <button className="btn btn-warning mx-1">Edit</button>
//                   <button className="btn btn-danger">Edit</button>
//                 </div>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     );
//   }
// }

export default TableData;
