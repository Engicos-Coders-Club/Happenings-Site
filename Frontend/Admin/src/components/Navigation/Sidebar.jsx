import React, { useState, useContext } from "react";
import { logout } from "../../actions/user";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Settings,
  SettingsOutlined,
  Close,
} from "@mui/icons-material";
import { Typography, IconButton, Button } from "@mui/material";
import { MenuContext } from "react-flexible-sliding-menu";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(window.location.pathname);
  const { toggleMenu } = useContext(MenuContext);
  
  return (
    <div className={classes.sidebar}>
      <IconButton
        className={classes.close_btn}
        onClick={toggleMenu}
        aria-label="close sidebar menu"
      >
        <Close className={classes.close} />
      </IconButton>

      <div className={classes.menu}>
        {/* home */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={(e) => {
            setTab("/");
            toggleMenu();
          }}
        >
          {tab === "/" ? (
            <Home style={{ color: "#0008C1" }} />
          ) : (
            <HomeOutlined />
          )}
          <Typography variant="subtitle1">Home</Typography>
        </NavLink>

        {/* settings */}
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={(e) => {
            setTab("/profile");
            toggleMenu();
          }}
        >
          {tab === "/profile" ? (
            <Settings style={{ color: "#0008C1" }} />
          ) : (
            <SettingsOutlined />
          )}
          <Typography variant="subtitle1">Profile</Typography>
        </NavLink>
      </div>

      {/* logo */}
      <div className={classes.sidebar_logo}>
        {/* <img
          className={classes.sidebar_logo_img}
          src={logo}
          alt="Fotokada Logo"
        /> */}
        logo
      </div>
    </div>
  );
};

export default Sidebar;
