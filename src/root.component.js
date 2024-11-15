import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import ConfirmEmail from "./components/ConfirmEmail";
import './output.css';

const Root = () => (
  <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/confirm" element={<ConfirmEmail />} />
    </Routes>
  </Router>
);

export default Root;
