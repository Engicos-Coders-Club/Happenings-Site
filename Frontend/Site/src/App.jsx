import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllEvents from "./components/AllEvents";
import Events from "./components/Events";
import CollegeRegistration from "./components/CollegeRegistration";
import EventRegistration from "./components/EventRegistration";
import "./index.css";
import EventSelection from "./components/EventSelection";
import TicketsSection from "./components/TicketsSection";
import Auth from "./components/Auth";
import FogotPassword from "./components/ForgotPassword";
import Teams from "./components/Teams";
import { SpinnerRoundOutlined } from "spinners-react";
import GeneralRulePage from "./components/GeneralRulePage";
import Participants from "./components/Participants";
import AllParticipants from "./components/AllParticipants";
import Modal from "./components/Modal";
import Layout from "./Layout";
import { loadUser } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
import ScrollTop from "./helpers/ScrollTop";
import SideBar from "./components/SideBar";
import NotFound from "./components/NotFound";
import { register } from "swiper/element/bundle";
import Verifying from "./components/Verifying";
import Results from "./components/Result";

function App() {
  // const location = useLocation();
  // console.log(location);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isAuthenticated, loading: serverLoading } = useSelector(
    (state) => state.auth
  );

  register();

  useEffect(() => {
    dispatch(loadUser());
    setLoading(false);
  }, []);

  return loading || serverLoading ? (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        backgroundColor: "black",
        display: "grid",
        placeItems: "center",
      }}
    >
      <SpinnerRoundOutlined
        size={80}
        thickness={50}
        speed={100}
        color="rgba(172, 57, 59, 1)"
      />
    </div>
  ) : (
    <React.Fragment>
      {/* <BrowserRouter> */}
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100wh",
              backgroundColor: "black",
              display: "grid",
              placeItems: "center",
            }}
          >
            <SpinnerRoundOutlined
              size={80}
              thickness={50}
              speed={100}
              color="rgba(172, 57, 59, 1)"
            />
          </div>
        }
      >
        <ScrollTop>
          <SideBar />
          <Routes>
            <Route element={<Layout title="Happenings" />} path="/" />
            <Route
              element={
                isAuthenticated ? (
                  <CollegeRegistration title="College Registration" />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/college-registration"
            />
            <Route
              element={
                isAuthenticated ? (
                  <EventRegistration title="Event Registration" />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/event-registration"
            />
            <Route
              element={
                isAuthenticated ? (
                  <EventSelection title="Event Selection" />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/event-selection"
            />
            <Route
              element={<TicketsSection title="Tickets" />}
              path="/tickets"
            />
            <Route
              element={
                isAuthenticated ? (
                  <Participants title="Participants" />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/participants/:id"
            />
            <Route
              element={
                isAuthenticated ? (
                  <AllParticipants title="All Participants" />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/participants"
            />
            <Route
              element={<AllEvents title="All Events" />}
              path="/all-events/:id"
            />

            {/* verify page */}
            <Route
              element={
                isAuthenticated ? (
                  <Verifying />
                ) : (
                  <Auth title="Authentication" />
                )
              }
              path="/verify"
            />
            <Route element={<Events title="Events" />} path="/all-events/" />
            {/* <Route element={<BookTickets title="Buy Tickets" />} path="/buy" /> */}
            <Route element={<Auth title="Authentication" />} path="/auth" />
            <Route
              element={<FogotPassword title="Fogot Password" />}
              path="/resetpass"
            />
            <Route
              element={<Teams title="Teams" />}
              exact
              matches
              path="/Teams/"
            />
            <Route
              element={<Results />}
              exact
              matches
              path="/results"
            />
            <Route
              element={<GeneralRulePage title="GeneralRulePage" />}
              path="/GeneralRule"
            />
            <Route element={<Modal title="Modal" />} path="/Modal" />
            {/* <Route element={<AllEvents title="AllEvents" />} path="/allevents" /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollTop>
        {/* </BrowserRouter> */}
      </Suspense>
    </React.Fragment>
  );
}

export default App;
