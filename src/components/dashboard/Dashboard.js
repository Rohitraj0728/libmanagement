import React from 'react';
import './Dashboard.css';
import logo from '../../img/Raj.jpg'

const Dashboard = () => {

    return (
        <div className="student-profile py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent text-center">
                                <img src={logo} className="profile_img"
                                    alt="student dp" />
                                <h3>Rohit Raj</h3>
                            </div>
                            <div className="card-body">
                                <p className="mb-0"><strong class="pr-1">Scholar ID:</strong>1914063</p>
                                <p className="mb-0"><strong class="pr-1">Department:</strong>ECE</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                            </div>
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tr>
                                        <th width="30%">Email id</th>
                                        <td width="2%">:</td>
                                        <td>rohit_ug@ece.nits.ac.in</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Mobile Number </th>
                                        <td width="2%">:</td>
                                        <td>9966996699</td>
                                    </tr>

                                    <tr>
                                        <th width="30%">Number of books issued</th>
                                        <td width="2%">:</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Book Names</th>
                                        <td width="2%">:</td>
                                        <td>BS Grewal,EVS,Chemistry,Physics</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Due date</th>
                                        <td width="2%">:</td>
                                        <td>20 May 2023</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        <div style={{
                            height: '26px'
                        }} ></div>
                        <div className="card shadow-sm">
                            < div className="card-header bg-transparent border-0">
                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Any Queries?</h3>
                            </div>
                            <div className="card-body pt-0">
                                <p>If you have any query or issue then visit the library to resolve it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
