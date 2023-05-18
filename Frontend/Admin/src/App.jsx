import { useEffect } from "react";
// import { loadSeller } from "./actions/user";
import { useDispatch, useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import { Typography } from "@mui/material";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Forgot from "./components/ForgotPassword/Forgot";
import "./index.css";
import Participants from "./components/Participants/Participants";
import Tickets from "./components/Tickets/Tickets";
import ViewParticipants from "./components/ViewParticipants/ViewParticipants";
import NewParticipants from "./components/CollegeParticipants/NewParticipants";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<Header />}>
            {/* protect following routes -----> */}
            <Route path="/" element={<Home />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/newparticipants" element={<NewParticipants />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/viewparticipants" element={<ViewParticipants />} />
            {/* ------------------------------> */}
            <Route
              path="*"
              element={
                <Typography variant="h1">Opps! 404 Not Found!</Typography>
              }
            />
          </Route>
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
