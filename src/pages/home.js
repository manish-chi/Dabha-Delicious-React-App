import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { handleError } from "../utils";
import "../homepage.css";
import Header from "./nav";

function HomePage() {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setloginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email,password are required!");
    }
  };
  return (
    <div className="home-page">
      <div className="image-title-container">
        <img className="title-icon" />
        <h1 id="main-title">Dhaba Delicious</h1>
      </div>
    </div>
  );
}

export default HomePage;
