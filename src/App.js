import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register_admin from './components/auth/Register_admin';
import Register_student from './components/auth/Register_student';

import './App.css';

import { Provider } from 'react-redux';

const App = () => {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="studentRegister" element={<Register_student />} />
                <Route path="adminRegister" element={< Register_admin />} />

            </Routes>
        </Router>

    )
};


export default App;
