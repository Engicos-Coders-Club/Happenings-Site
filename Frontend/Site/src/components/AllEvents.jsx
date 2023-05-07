// ! Events Page Page => /events/all
import { useEffect } from "react";
import eventsData from "../data/eventsData";
import EventCard from "./EventCard";
import { useParams } from "react-router-dom";
import { getEvents } from "../actions/events";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import eventsBg from "../assets/events-bg.jpg";

function Events(props) {
  const { onStageEvents, offStageEvents } = eventsData;
  const { title } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  // RENDER THIS EVENTS
  const { loading, events } = useSelector((state) => state.event);

  useEffect(() => {
    document.title = title;
    dispatch(getEvents(id));
  }, []);

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
  ) : (
    <div>
      <div
        className="pt-20 min-h-screen pl-0 md:pl-16"
        style={{
          background: `url('${eventsBg}') no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="border-l border-r border-t border-red-600 mx-auto w-[300px]" >
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl py-2" style={{ 'fontFamily': 'MangoGrotesque' }}>All Events</h1>
                </div> */}

        <div className="w-[80vw] mx-auto py-16">
          <h1
            className="uppercase text-[#F8E0B7] text-center text-5xl font-bold"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            {location.state.event}
          </h1>
          <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
            {events
              ? events.map((event) => {
                  return <EventCard key={event.id} event={event} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
