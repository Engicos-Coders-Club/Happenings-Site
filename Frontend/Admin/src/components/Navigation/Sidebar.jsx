import React, { useState, useContext } from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Close,
  PersonSearch,
  PersonSearchOutlined,
  Logout,
  LocalActivity,
  LocalActivityOutlined,
} from "@mui/icons-material";
import { Typography, IconButton, Button } from "@mui/material";
import { MenuContext } from "react-flexible-sliding-menu";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/happenings-logo.png";
import { logout } from "../../store/actions/auth";

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
            <Home style={{ color: "#FF6600" }} />
          ) : (
            <HomeOutlined />
          )}
          <Typography variant="subtitle1">Home</Typography>
        </NavLink>
        <NavLink
          to="/newparticipants"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={(e) => {
            setTab("/newparticipants");
            toggleMenu();
          }}
        >
          {tab === "/newparticipants" ? (
            <LocalActivity style={{ color: "#FF6600" }} />
          ) : (
            <LocalActivityOutlined />
          )}
          <Typography variant="subtitle1">College Participants</Typography>
        </NavLink>

        {/* settings */}
        <NavLink
          to="/participants"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={(e) => {
            setTab("/participants");
            toggleMenu();
          }}
        >
          {tab === "/participants" ? (
            <PersonSearch style={{ color: "#FF6600" }} />
          ) : (
            <PersonSearchOutlined />
          )}
          <Typography variant="subtitle1">Participants</Typography>
        </NavLink>

        {/* <----------- logout button -----------> */}
        <Button
          // className={}
          onClick={(e) => {
            dispatch(logout())
            toggleMenu();
          }}
          startIcon={<Logout />}
          variant="outlined"
        >
          <Typography variant="subtitle1">Logout</Typography>
        </Button>
      </div>

      {/* logo */}
      <div className={classes.sidebar_logo}>
        <img
          className={classes.sidebar_logo_img}
          src={logo}
          alt="Happenings Logo"
        />
      </div>
    </div>
  );
};

export default Sidebar;
