import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
