import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import RegisterAdmin from "./components/auth/RegisterAdmin";
import RegisterStudent from "./components/auth/RegisterStudent";
import BookDisplay from "./components/bookDisplay/BookDisplay.js";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/bookDetails/BookDetails";

import "./App.css";

import { Provider } from "react-redux";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import BookAdd from "./components/bookEditForm/BookAdd";
import About from "./components/about/About";
import BookEdit from "./components/bookEditForm/BookEdit";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="studentRegister" element={<RegisterStudent />} />
        <Route path="adminRegister" element={<RegisterAdmin />} />
        <Route path="bookDisplay" element={<BookDisplay />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="bookDetail/:id" element={<BookDetails />} />
        <Route path="bookAdd" element={<BookAdd />} />
        <Route path="bookEdit" element={<BookEdit />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
