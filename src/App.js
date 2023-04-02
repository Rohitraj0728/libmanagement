import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import RegisterAdmin from './components/auth/RegisterAdmin';
import RegisterStudent from './components/auth/RegisterStudent';
import BookDisplay from './components/bookDisplay/BookDisplay.js';

import './App.css';

import { Provider } from 'react-redux';

const App = () => {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="studentRegister" element={<RegisterStudent />} />
                <Route path="adminRegister" element={< RegisterAdmin />} />
                <Route path="bookDisplay" element={< BookDisplay/>} />
                
            </Routes>
        </Router>

    )
};


export default App;
