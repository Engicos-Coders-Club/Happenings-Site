import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { getSingleEvent } from "../actions/events";
import { useDispatch } from "react-redux";
import { useState } from "react";

function EventSelectionCard(props) {
  const { event, isSelected } = props;
  const dispatch = useDispatch();

  const isFull =
    event.no_of_participants == event.registered_participants ? true : false;

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
    <>
      {showEventModal &&
        createPortal(
          <Modal event_id={event.id} closeModal={setShowEventModal} />,
          document.getElementById("modal")
        )}
      <div
        className={`border-2 p-3 rounded-md border-gray-600 ${
          event.status ? "bg-lime-800" : isSelected ? "bg-yellow-600" : null
        } w-[250px] h-max font-basic`}
      >
        <div className="flex justify-center items-start flex-col mb-4">
          <h3 className="text-white text-xl md:text-2xl tracking-wide uppercase font-bold">
            {event.event.split("(")[0]}
          </h3>
          <h6 className="text-yellow-300 text-md md:text-lg uppercase font-bold">
            {event.event.split("(")[1]?.replace(")", " ")}
          </h6>
        </div>
        <hr className="mt-3 mb-1 border-yellow-700" />
        <p className="text-white text-sm md:text-[1rem]">
          Participants = {event.no_of_participants}
        </p>
        <p className="text-white text-sm md:text-[1rem]">
          Registered = {event.registered_participants}
        </p>
        <hr className="mb-3 mt-1 border-yellow-700" />
        <div className="flex gap-2 items-center">
          <Link
            className="flex items-center justify-between text-sm text-black gap-1 py-1 px-3 w-max bg-gray-100 hover:bg-gray-300 rounded"
            onClick={showEventModalHandler}
            state={{ event_id: event.id, applied: false }}
          >
            details
            <FiArrowUpRight />
          </Link>
          {isSelected ? (
            <Link
              className="flex items-center justify-between text-sm text-black gap-1 py-1 px-3 w-1/3 bg-gray-100 hover:bg-gray-300 rounded"
              to={`/participants/${event.id}`}
              state={{ isFull }}
            >
              edit
              <FiArrowUpRight />
            </Link>
          ) : (
            <Link
              className="flex items-center justify-between text-sm text-black gap-1 py-1 px-3 w-1/3 bg-gray-100 hover:bg-gray-300 rounded"
              to={"/event-registration"}
              state={{ event_id: event.id, applied: false }}
            >
              apply
              <FiArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default EventSelectionCard;
