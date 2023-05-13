//! Event Selection Page => register/events

import { useEffect } from "react";
import eventsData from "../data/eventsData";
import EventSelectionCard from "./EventSelectionCard";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { checkCoordinator, viewParticipants } from "../actions/college";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer, toast } from "react-toastify";

// TODO: Change logout logo

function EventSelection(props) {
  const { onStageEvents } = eventsData;
  const { title } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(location.props);
  const { loading, is_Coordinator, events } = useSelector(
    (state) => state.college
  );

  useEffect(() => {
    document.title = title;
    dispatch(checkCoordinator());
  }, []);

  useEffect(() => {
    if (is_Coordinator?.is_paid === true && is_Coordinator.coordinator === true)
      dispatch(viewParticipants());
    else {
      toast("You have to be a college coordinator", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [is_Coordinator]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return loading ? (
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
  ) : is_Coordinator.coordinator ? (
    <div className="mx-auto bg-black text-white min-h-screen">
      <div className="py-8">
        <div className="flex justify-end w-full md:w-4/5 mx-auto">
          <div className="flex items-center justify-end">
            <FiArrowRight
              size={40}
              onClick={handleLogout}
              className="cursor-pointer border-red-600 border p-2 hover:bg-red-600 hover:border-none hover:scale-125"
            />
            <p
              className="px-5 text-2xl md:text-3xl"
              style={{
                fontFamily:
                  "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
              }}
            >
              Logout
            </p>
          </div>
        </div>
        <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-5/6 md:w-[350px] mt-6">
          <h1
            className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            Select Event
          </h1>
        </div>
        <div className="w-[80vw] md:w-[60vw] mx-auto pt-8">
          <h1
            className="uppercase text-[#F8E0B7] text-4xl font-bold text-center"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            Events
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-5 mt-4 justify-evenly md:justify-evenly">
            {events &&
              events.map((event, index) => {
                return (
                  <EventSelectionCard
                    key={event.id}
                    event={event}
                    isSelected={
                      event.registered_participants > 0 ? true : false
                    }
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto bg-black text-white min-h-screen">
      <div className="py-8">
        <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-5/6 md:w-[350px] mt-6">
          <h1
            className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            FORBIDDEN
          </h1>
        </div>
        <div className="w-[80vw] md:w-[60vw] mx-auto pt-8">
          <h1
            className="uppercase text-[#F8E0B7] text-4xl text-center font-bold"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            YOU HAVE TO BE A COLLEGE COORDINATOR TO HANDLE EVENT REGISTERATION
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLogout}
            className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center uppercase"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            LOGOUT <FiArrowUpRight size={20} />
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/">
            <button
              className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center uppercase"
              style={{
                fontFamily:
                  "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
              }}
            >
              GO TO HOME <FiArrowUpRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventSelection;
