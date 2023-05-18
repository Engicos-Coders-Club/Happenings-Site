import { useEffect } from "react";
// import { loadSeller } from "./actions/user";
import {loadUser} from './store/actions/auth'
import { useDispatch, useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import { Typography,Backdrop,CircularProgress } from "@mui/material";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Forgot from "./components/ForgotPassword/Forgot";
import "./index.css";
import Participants from "./components/Participants/Participants";
import Tickets from "./components/Tickets/Tickets";
import ViewParticipants from "./components/ViewParticipants/ViewParticipants";
import NewParticipants from "./components/CollegeParticipants/NewParticipants";

function App() {
  const dispatch = useDispatch()

  const {loading,isAuthenticated} = useSelector((state)=>state.auth)

  useEffect(()=>{
    dispatch(loadUser())
  },[])

  if(loading)
    return ( 
    <Backdrop open={true}>
      <CircularProgress/>
    </Backdrop>
  )
  else
    return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={isAuthenticated?<Header />:null}>
            {/* protect following routes -----> */}
            <Route path="/" element={isAuthenticated?<Home />:<Login/>} />
            <Route path="/participants" element={isAuthenticated?<Participants />:<Login/>} />
            <Route path="/newparticipants" element={isAuthenticated?<NewParticipants />:<Login/>} />
            <Route path="/tickets" element={isAuthenticated?<Tickets />:<Login/>} />
            <Route path="/viewparticipants/:id" element={isAuthenticated?<ViewParticipants />:<Login/>} />
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
