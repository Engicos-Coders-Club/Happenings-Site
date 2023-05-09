import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeParticipant, viewEventParticipants } from "../actions/college";

function participantCard({ member, event_id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    navigate("/event-registration", {
      state: { event_id: event_id, applied: true, participant: member },
    });
  };
  const handleDelete = async () => {
    await dispatch(removeParticipant(member.id));
    dispatch(viewEventParticipants(event_id));
  };

  return (
    <>
      <div className="bg-gray-700 rounded p-2">
        <div className="w-[200px] h-[250px]">
          <img
            src={member.id_card}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-white p-2 font-basic text-md bg-gray-800">
          <p className="text-gray-400">
            Name: <span className="text-white capitalize">{member.name}</span>
          </p>
          <p className="text-gray-400">
            Contact: <span className="text-white">{member.phone}</span>
          </p>
        </div>
        <div className="flex flex-col w-3/4 mx-auto font-basic font-md">
          <button
            onClick={handleEdit}
            className="text-cus-orange border border-cus-orange my-2 px-4 py-1 rounded-md hover:text-white hover:bg-cus-orange hover:scale-105 uppercase cursor-pointer text-base tracking-wide"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-cus-orange border border-cus-bright-orange my-2 px-4 py-1 rounded-md hover:text-white hover:bg-cus-bright-orange hover:scale-105 uppercase cursor-pointer text-base tracking-wide"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default participantCard;
