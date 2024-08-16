import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { handleError } from "../utils";
import "../forgotpassword.css";

function ForgotPassword() {
  const [forgotPasswordInfo, setforgotPasswordInfo] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyforgotPasswordInfo = { ...forgotPasswordInfo };
    copyforgotPasswordInfo[name] = value;
    forgotPasswordInfo(copyforgotPasswordInfo);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const { email, password,passwordConfirm } = forgotPasswordInfo;
    if (!email || !password || !passwordConfirm) {
      return handleError("email,password,passwordConfirm are required!");
    }
  };
  return (
    <div className="forgotpassword-page">
      <div className="container">
        <h1 class="form-heading">Reset Password</h1>
        <form onSubmit={handleForgotPassword}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your Email.."
              value={forgotPasswordInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your new password.."
              value={forgotPasswordInfo.password}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirm-password"
              placeholder="re-enter your new password.."
              value={forgotPasswordInfo.passwordConfirm}
            />
          </div>
          <button type="submit">Change Password</button>
          <span class="span-info">
            New to Daba Delicious?<br></br>
            <Link to="/signup">Create Account</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ForgotPassword;
