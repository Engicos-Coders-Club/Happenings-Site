// import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import eventsCardBg from "../assets/events-card.png";
import { TiChevronRight } from "react-icons/ti";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { getSingleEvent } from "../actions/events";

function EventCard(props) {
  const { event } = props;
  const dispatch = useDispatch()

  const [showEventModal, setShowEventModal] = useState(false);

  const showEventModalHandler = () => {
    dispatch(getSingleEvent(event.id));
    setShowEventModal(true);
  };

  useEffect(() => {
    if (showEventModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showEventModal]);

  return (
    <div
      className="w-[260px] h-[360px] m-3 flex flex-col justify-center gap-y-2"
      style={{
        background: `url(${eventsCardBg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {showEventModal &&
        createPortal(
          <Modal event_id={event.id} closeModal={setShowEventModal} />,
          document.getElementById("modal")
        )}
      <div className="flex justify-between items-center mx-5">
        <p
          className="text-2xl tracking-wider font-semibold text-red-900"
          style={{ fontFamily: "MangoGrotesque" }}
        >
          Event
        </p>
        <button onClick={showEventModalHandler}>
          <RiArrowRightUpLine className="text-xl text-red-900" />
        </button>
      </div>

      <button
        onClick={showEventModalHandler}
        className="self-center w-[85%] h-[45%] border border-red-950 border-2"
      >
        <div className=" mx-auto flex flex-col justify-center p-4">
          <p
            className="text-left text-red-950 tracking-wide text-[2.6rem] leading-[1] font-bold w-full"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            {event?.event_name.split("(")[0]}
          </p>

          <p
            className="text-left text-red-800 text-3xl font-bold w-full"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            {event?.event_name.split("(")[1]?.replace(")", " ")}
          </p>
        </div>
      </button>
      <div className="bg-red-950 w-5/6 px-3 py-2 self-center">
        <p
          className="uppercase font-bold my-1 text-sm tracking-widest text-yellow-800"
          style={{ fontFamily: "Merriweather" }}
        >
          Coordinators
        </p>
        {event.coordinators.map((coordinator, index) => {
          return (
            <div
              className="text-left gap-x-2 text-yellow-500 flex gap-1 mb-1 items-top tracking-wide"
              key={index}
            >
              <TiChevronRight />
              <div>
                <p
                  className="text-xs text-yellow-500 capitalize font-bold"
                  style={{ fontFamily: "Merriweather" }}
                >
                  {coordinator?.name}
                </p>
                <p
                  className="text-xs text-yellow-600"
                  style={{ fontFamily: "Merriweather" }}
                >
                  ({coordinator?.phone})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventCard;
