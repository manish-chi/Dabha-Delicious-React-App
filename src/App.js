import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MinimizableWebChat from "./MinimizableWebChat";
import WebPageBackground from "./WebPage.jpg";
import "./App.css";
import Login from "./pages/login";
import SignupPage from "./pages/signup";
import HomePage from "./pages/home";
import ForgotPasswordPage from "./pages/forgotpassword";
import MainPage from "./pages/main";

const App = () => (
  <div className="App">
    {/* <img alt="product background" src={WebPageBackground} /> */}
    {/* <MinimizableWebChat /> */}
    <Routes>
      {/* <Route path='/' element={<Navigate to="/login"/>}/> */}
      <Route path="/main" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
    </Routes>
  </div>
);

export default App;
