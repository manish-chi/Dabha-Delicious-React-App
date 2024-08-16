import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { handleError } from "../utils";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Login() {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
    phoneNumber :""
  });

  const [location, setLocation] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setloginInfo(copyLoginInfo);

    sendUserLocation();
  };

  function sendUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Hey are we winning!");
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email,password are required!");
    }

    try {
      const url = "http://localhost:3000/api/v1/users/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      if (response.status === 200) {
        let record = await response.json();
        console.log(record.data.user._id);
        loginInfo.name = record.data.user.name;
        loginInfo.userId = record.data.user._id;
        loginInfo.location = location;
        navigate("/main", { state: { data: loginInfo } });
      } else {
        handleError("Invalid email id or password! Please try again!");
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1 className="form-heading">login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your Email.."
              value={loginInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password.."
              value={loginInfo.password}
            />
          </div>
          <span class="span-forgotpassword">
            <Link to="/forgotPassword">Forgot Password</Link>
          </span>
          <button type="submit">Login</button>
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

export default Login;
