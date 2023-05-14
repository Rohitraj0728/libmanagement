import React from "react";
import "./Dashboard.css";
import logo from "../../img/Raj.jpg";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img src={logo} className="profile_img" alt="student dp" />
                <h3>Rohit Raj</h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong class="pr-1">Department:</strong>ECE
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th width="30%">Email id</th>

                    <td>rohit_ug@ece.nits.ac.in</td>
                  </tr>
                  <tr>
                    <th width="30%">Mobile Number </th>

                    <td>9966996699</td>
                  </tr>
                </table>
              </div>
              <table className="button-table">
                <tbody>
                  <tr>
                    <td>
                      {" "}
                     <Link to={{pathname:"/bookAdd"}}> <button className="button">Add Book</button></Link>
                    </td>
                    <td>
                      {" "}
                      <Link to={{pathname:"/bookEdit"}}> <button className="button">Edit/Delete Book</button></Link>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                height: "26px",
              }}
            ></div>
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>Any Queries?
                </h3>
              </div>
              <div className="card-body pt-0">
                <p>
                  If you have any query or issue then visit the library to
                  resolve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
