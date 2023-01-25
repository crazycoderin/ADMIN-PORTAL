import React from 'react';
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Update from "./pages/update";
// import NewLoading from './components/common/newloading';

function App() {
  return (
    <div className="App">
      {/* <NewLoading /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dasboard" element={<Dashboard />} />
          <Route path="/dasboard/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
