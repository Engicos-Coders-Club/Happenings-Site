import ParticipantCard from "./ParticipantCard";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { viewAllParticipants } from "../actions/college";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiArrowUpLeft } from "react-icons/fi";

//edit add   name no id  participants

function AllParticipants() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewAllParticipants());
  }, []);

  const { loading, participants } = useSelector((state) => state.college);

  return loading || !participants ? (
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
    <section className="min-h-screen w-3/4 mx-auto">
      {/* back button */}
      <div className="flex justify-center md:justify-start items-center w-full pt-20">
        <div className="flex items-center justify-end text-white uppercase">
          <NavLink to="/event-selection">
            <FiArrowLeft
              size={40}
              className="cursor-pointer border-red-600 border p-2 hover:bg-red-600 hover:border-none hover:scale-125"
            />
          </NavLink>

          <p
            className="px-5 text-2xl md:text-3xl"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            back to events
          </p>
        </div>
      </div>

      {/* data */}
      <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-5/6 md:w-[350px] mt-6">
        <h1
          className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3"
          style={{
            fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
          }}
        >
          ALL PARTICIPANTS
        </h1>
      </div>
      <div className="w-[80vw] md:w-[60vw] mx-auto pt-8">
        <div className="flex flex-col flex-wrap gap-4 md:gap-x-10 mt-4 justify-center">
          {participants &&
            participants.map((ele) => (
                <>
                    {
                        <div className="flex flex-col gap-4">
                            <h4
                            className="uppercase text-yellow-600 text-center font-extrabold text-6xl pt-3"
                            style={{fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",}}
                            >
                            {ele.event}
                            </h4>
                            <div className="flex flex-wrap gap-2 md:gap-x-10 mt-4 justify-center">
                                {
                                    ele.participants.map((el)=>
                                        <ParticipantCard key={el.id} event_id={ele.id} member={el} />
                                    )
                                }
                            </div>
                        </div>
                    }
                  </>      
                )
            )}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default AllParticipants;
