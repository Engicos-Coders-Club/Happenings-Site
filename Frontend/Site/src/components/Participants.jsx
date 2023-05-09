import ParticipantCard from "./ParticipantCard";
import { Link, useNavigate, useParams,useLocation } from "react-router-dom";
import { viewEventParticipants } from "../actions/college";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer, toast } from 'react-toastify';

//edit add   name no id  participants

function participants() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const {isFull} = location?.state

  useEffect(()=>{
    dispatch(viewEventParticipants(id))
  },[])

  const handleClick = () =>{
    if(!isFull)
      navigate(`/event-registration`,{state:{event_id:id}})
    else
    toast('Max Participation limit reached', {
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

  const {loading,participants} = useSelector((state)=>state.college)

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
  ) :
  (
    <section className='min-h-screen '>

        <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-5/6 md:w-[350px] mt-6">
          <h1
            className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3"
            style={{ fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif" }}
          >
            PARTICIPANTS
          </h1>
        </div>
        <div className=" mt-10 flex items-center justify-center">
            
            <button
              className="text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-md hover:text-white hover:bg-orange-600 hover:scale-105 uppercase cursor-pointer text-2xl tracking-wide"
              style={{ fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif" }}
              onClick={handleClick}
            >
              Add +
            </button>
          </div>
        <div className="w-[80vw] md:w-[60vw] mx-auto pt-8">
          
          <div className="flex flex-wrap gap-2 md:gap-x-10 mt-4 justify-center md:justify-start">
          {
            participants && participants.map((ele)=>
              <ParticipantCard key={ele.id} event_id={id} member={ele}/>  
            )
          }
            
            {/* <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard /> */}
           
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
  )
}


export default participants;