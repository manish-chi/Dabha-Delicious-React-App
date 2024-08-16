import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { handleError } from "../utils";
import "../signup.css";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("all fields are required!..");
    }

    try {
      const url = "/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = response.json();
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="signup-page">
        <></>
      <div className="container">
        <h1 class="form-heading">Sign up</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name.."
              value={signupInfo.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your Email.."
              value={signupInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password.."
              value={signupInfo.password}
            />
          </div>
          <button type="submit">Create account</button>
          <span class="span-info">
            Already have an account?&nbsp;
            <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
