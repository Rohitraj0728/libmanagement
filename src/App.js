import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import RegisterAdmin from './components/auth/RegisterAdmin';
import RegisterStudent from './components/auth/RegisterStudent';
import BookDisplay from './components/bookDisplay/BookDisplay.js';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

import { Provider } from 'react-redux';

const App = () => {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="studentRegister" element={<RegisterStudent />} />
                <Route path="adminRegister" element={< RegisterAdmin />} />
                <Route path="bookDisplay" element={< BookDisplay />} />
                <Route path="dashboard" element={<Dashboard />} />

            </Routes>
        </Router>

    )
};


export default App;
