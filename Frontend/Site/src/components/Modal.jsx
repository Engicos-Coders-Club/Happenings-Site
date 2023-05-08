import Frame from "../assets/Frame.png";
import Avatar from "../assets/Avatar.png";
import { FiX } from "react-icons/fi";
import { getSingleEvent } from "../actions/events";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import modalBg from "../assets/modalBg.png";
import { SpinnerRoundOutlined } from "spinners-react";
import { BsArrowRightShort } from "react-icons/bs";

// format Date
const dateFormatter = (value) => {
  const newVal = new Date(value);

  const formatted = newVal
    .toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    })
    .split(", ");
  return formatted;
};

function Modal({ event_id, closeModal }) {
  const { event, eventLoading } = useSelector((state) => state.event);

  const closeModalHandler = () => {
    closeModal(false);
  };

  return (
    <div className="fixed overflow-hidden left-0 top-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
      {eventLoading ? (
        <SpinnerRoundOutlined
          size={80}
          thickness={50}
          speed={100}
          color="rgba(172, 57, 59, 1)"
        />
      ) : (
        <div
          id="modal"
          className="bg-cover h-[96%] rounded-lg my-8 w-[80%] sm:w-[68%] md:w-[62%] lg:w-[50%] overflow-y-scroll"
          style={{
            fontFamily: "Merriweather",
            background: `url("${modalBg}") white no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-between items-end px-5 my-5">
            <p className="text-xl md:text-4xl font-MANGO uppercase border-2 border-dashed p-2">
              Events Details
            </p>
            <button
              onClick={closeModalHandler}
              className="flex items-center border-2 border-dashed border-black py-[1.3%] px-[2.4%] text-xl md:text-2xl font-MANGO uppercase"
            >
              Close
              <FiX className="m-[0.4rem]" />
            </button>
          </div>

          <div className="px-10 my-5">
            <hr className="border-black my-1" />
            <hr className="border-black my-1" />
            <p className="text-center my-2 text-4xl sm:text-5xl md:text-7xl">
              <span className="font-bold font-MANGO">{event?.event_name}</span>
            </p>
            <hr className="border-black my-1" />
            <hr className="border-black my-1" />
          </div>

          {/* Display this for Screen Greater than 1024px */}
          <div>
            <div
              className="px-10 my-5 flex flex-col-reverse md:flex-row"
              style={{ gridTemplateColumns: "60% 36%", gap: "4%" }}
            >
              <div>
                <p className="my-2 md:my-0 font-bold text-sm md:text-md text-center sm:text-left">
                  {event?.description}
                </p>
              </div>

              <img
                src={event?.cover_image}
                width="55%"
                alt=""
                className="my-2 md:my-0 mx-auto"
              />
            </div>
          </div>

          {/* timing */}
          <div className="mx-10 my-6 px-4 border-2 border-black">
            <p className="my-2 text-xs md:text-lg capitalize flex items-end gap-1">
              Date :{" "}
              <strong className="font-extrabold text-[1rem] md:text-xl">
                {dateFormatter(event?.timing)[0]}
              </strong>
            </p>
            <p className="my-2 text-xs md:text-lg capitalize flex items-center gap-1">
              Time :{" "}
              <strong className="font-extrabold text-[1rem] md:text-xl">
                {dateFormatter(event?.timing)[1]}
              </strong>
            </p>
          </div>

          {/* venue */}
          <div className="px-10 my-5">
            <hr className="border-black my-1" />{" "}
            <hr className="border-black my-1" />
            <p className="mt-5 text-xs md:text-lg capitalize flex items-center md:items-end gap-3">
              Venue:{" "}
              <strong className="font-extrabold text-[1rem] md:text-2xl">
                {event?.venue}
              </strong>
            </p>
          </div>

          <div className="px-10 my-5">
            {/* <hr className="border-black my-1" />{" "}
            <hr className="border-black my-1" />
            <p className="my-5 text-xs md:text-lg capitalize flex items-center md:items-end gap-1">
              No of participants:{" "}
              <strong className="font-extrabold text-[1rem] md:text-3xl">
                {event?.no_of_participants}
              </strong>
            </p> */}
            <hr className="border-black my-1" />{" "}
            <hr className="border-black my-1" />{" "}
          </div>

          {/* Display this for Screen less than 1024px */}
          {/* <div className='lg:hidden px-10 my-5 text-[9px]  sm:text-xs md:text-sm lg:text-base'>
                <div style={{'display':'grid','gridTemplateColumns':'60% 36%', 'gap':'4%'}}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam eaque voluptas perferendis consequatur rem laboriosam. Temporibus, iusto id. Quidem nemo natus corporis.</p>
                    <img src={Frame} alt="" />
                </div>
                <p className='border-2 border-black p-2 my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam eaque voluptas perferendis consequatur rem laboriosam. Temporibus, iusto id. Quidem nemo natus corporis.</p>
            </div> */}

          <div className="px-10 my-5">
            <hr className="border-black my-1" />
            <div className="my-3 text-lg sm:text-xl md:text-2xl">
              <p className="font-extrabold">RULES</p>
            </div>
            <hr className="border-black my-1" />
          </div>

          {/* rules */}
          <div className="px-10 my-5 text-xs md:text-sm lg:text-base list-disc">
            <p className="my-2 md:my-0">
              {event?.rules.split("\n").map((rule, index) => (
                <div
                  key={index}
                  className="mt-1 flex items-top justify-start gap-2"
                >
                  <BsArrowRightShort className="text-lg" />
                  <p className="basis-[90%]">{rule}</p>
                </div>
              ))}
            </p>
          </div>

          <div className="px-10 my-5">
            <hr className="border-black my-1" />
            <p className="my-3 font-extrabold text-lg sm:text-xl md:text-2xl">
              JUDGING CRITERIA
            </p>
            <hr className="border-black my-1" />
            <div className="text-xs md:text-sm lg:text-base mt-3">
              {event?.judging_criteria.split("\n").map((rule, index) => (
                <div
                  key={index}
                  className="mt-1 flex items-top justify-start gap-2"
                >
                  <BsArrowRightShort className="text-lg" />
                  <p className="basis-[90%]">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-10 my-6 px-4 border-2 border-black">
            <p className="font-extrabold my-2 text-lg sm:text-xl md:text-2xl">
              COORDINATORS
            </p>
            {event &&
              event.coordinators.map((ele) => (
                <div key={ele.name} className="my-2" style={{'display':'grid','gridTemplateColumns':'8% 92%', 'gap':'3%'}}>
                  {/*  */}
                  <img src={ele.photo}  alt="image" />
                  <div className="w-full text-sm md:text-base">
                    <p className="font-bold">{ele.name}</p>
                    <p>{ele.phone}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
