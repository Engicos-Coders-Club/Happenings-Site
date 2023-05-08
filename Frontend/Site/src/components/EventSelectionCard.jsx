import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function EventSelectionCard(props) {
  const { event, isSelected } = props;

  const isFull =
    event.no_of_participants == event.registered_participants ? true : false;

  return (
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
  );
}

export default EventSelectionCard;
