// ! Events Page Page => /events/event
// TODO: Integrate event details (Modal) with each event card

import { useState, useEffect } from "react";
import eventsData from "../data/eventsData";
import EventCard from "./EventCard";
import { getAllEvents,getDay1Events,getDay2Events } from "../actions/events";
import { useDispatch, useSelector } from "react-redux";
import eventsBg from "../assets/events-bg.webp";
import SideBar from "./SideBar";
import Navbar from "./navbar";
import { SpinnerRoundOutlined } from "spinners-react";

function Events(props) {
  const { onStageEvents } = eventsData;
  const { title } = props;
  const dispatch = useDispatch();
  // const [showEventModal, setShowEventModal] = useState(false)

  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index)
  }

  useEffect(() => {
    document.title = title;
    dispatch(getAllEvents());
  }, []);

  useEffect(()=>{
    if(toggleState == 1)
      dispatch(getAllEvents());
    else if(toggleState == 2)
      dispatch(getDay1Events());
    else
      dispatch(getDay2Events())
  },[toggleState])

  const { all_events, day1_events, day2_events, loading } = useSelector((state) => state.event);


  return loading || !all_events ? (
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
    <div className="">
      <div
        className="min-h-screen"
        style={{
          background: `url('${eventsBg}') no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80vw] mx-auto py-16">
          <div className="border-2 border-red-400 mx-auto w-[300px]">
            <h1
              className="uppercase text-red-600 text-center font-extrabold text-7xl pt-3"
              style={{ fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif" }}
            >
              All Events
            </h1>
          </div>
          <div className='relative top-10 w-full flex tracking-widest justify-center items-center border-y-2 py-10 border-[white] h-[50px]'>
            <ul className='font-MANGO sm:text-xl lg:text-3xl text-xl text-white list-none flex flex-right gap-9 p-2 cursor-pointer'>
              <li onClick={() => toggleTab(1)} className={toggleState == 1 ? 'active-tab' : 'non-active-tab'}>ALL EVENTS</li>
              <li onClick={() => toggleTab(2)} className={toggleState == 2 ? 'active-tab' : 'non-active-tab'}>DAY 1</li>
              <li onClick={() => toggleTab(3)} className={toggleState == 3 ? 'active-tab' : 'non-active-tab'}>DAY 2</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
            {
              toggleState == 1?
              all_events.map((event) => {
                return (
                  <div
                    key={event.category_name}
                    className="w-[80vw] mx-auto py-16"
                  >
                    <h1
                      className="uppercase text-[#F8E0B7] text-center text-6xl tracking-wide font-bold"
                      style={{ fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif" }}
                    >
                      {event.category_name}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                      {event.events.map((ev) => {
                        return <EventCard key={ev.id} event={ev} />;
                      })}
                    </div>
                  </div>
                );
              }):null
            }
            {
              toggleState == 2 && day1_events ?
              <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                      {day1_events.map((ev) => {
                        return <EventCard key={ev.id} event={ev}/>;
                      })}
              </div>:null
            }
            {
              toggleState == 3 && day2_events ?
              <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                      {day2_events.map((ev) => {
                        return <EventCard key={ev.id} event={ev}/>;
                      })}
              </div>:null
            }
          </div>
        </div>
        {/* <div className='w-[80vw] mx-auto py-16'>
                    <h1 className="uppercase text-[#F8E0B7] text-center text-5xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>OnStage Events</h1>
                    <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                        {onStageEvents.map((event) => {
                            return (
                                <div key={event.id} onClick={() => setShowEventModal(true)}>
                                    <EventCard key={event.id} event={event} onClick={() => console.log(showEventModal)} />
                                </div>
                            )
                        })}
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default Events;
