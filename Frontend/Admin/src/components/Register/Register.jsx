import {
  Avatar,
  Typography,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.css";
import { useAlert } from "react-alert";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(register(name, email, password, file,phone));
    navigate("/");
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
      <Typography
          variant="h2"
          fontWeight={700}
          textTransform="uppercase"
          sx={{ padding: "2vmax", textAlign: "center" }}
        >
          Happenings 2023
        </Typography>

        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          value={name}
          placeholder="Name"
          className="registerInputs"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Mobile"
          className="registerInputs"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Typography className="register-old">
          New User? Register <Link to="/login">here</Link>.
        </Typography>

        <Button type="submit" variant="contained">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
