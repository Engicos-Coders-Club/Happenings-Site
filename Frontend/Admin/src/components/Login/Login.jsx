import React, { useState, useEffect } from "react";
import "./Login.css";
import { Typography, Button, Backdrop, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    // dispatch(login(email, password));
  };

    return (
      <div className="login">
        <form className="loginForm" onSubmit={loginHandler}>
          <Typography
            variant="h3"
            style={{ padding: "2vmax", textAlign: "center" }}
          >
            Twist Hunt
          </Typography>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgot">
            <Typography>Forgot Password</Typography>
          </Link>
          <Button type="submit">Login</Button>
          <GoogleLogin/>
          <Link to="/register">
            <Typography>New User?</Typography>
          </Link>
        </form>
      </div>
    );
};

export default Login;
