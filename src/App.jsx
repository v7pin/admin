import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import ProvideCertificate from "./components/ProvideCertificate";
import LinkUpdate from "./components/LinkUpdate";
import ShowDatabase from "./components/ShowDatabase";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/provide-certificate" element={<ProvideCertificate />} />
        <Route path="/link-update" element={<LinkUpdate />} />
        <Route path="/show-database" element={<ShowDatabase />} />
      </Routes>
    </Router>
  );
};

export default App;
