import { FiArrowUpRight } from "react-icons/fi";
import { Link} from "react-router-dom";

function EventTab(props) {
  const clip = {
    clipPath:
      "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)",
    transition: "transform 0.4s",
    
    // height: "400px",
    // width: "700px",
  };

  const data = {'event':props.eventName}

  return (
    <>
      {/* Event Tab */}
      <div className="min-w-[57%] xs:min-w-[29%] sm:min-w-[21%] md:min-w-[19%] lg:min-w-[15%] h-3/4 my-[68px] mx-12 sm:my-[40px] md:my-14 md:mx-22">
          {/* Image */}
          <div className="w-full  cursor hover:scale-105 h-[25vh] xs:h-[50vh]" style={clip}>
          <Link to={`/all-events/${props.id}`} state={data}>
              <img
                src={props.img}
                alt=""
                style={{
                  transition: "transform 0.8s",
                  objectFit: "cover",
                  // width: "110%",
                  height: "100%",
                }}
                className="bg-cover hover:scale-125 w-full xs:w-[120%]"
              />
            </Link>
          </div>

          {/* Text Button */}
          <div className="flex justify-between mt-10">
            <p
              className="text-white text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "MangoGrotesque" }}
            >
              {props.eventName}
            </p>
            <Link to={`/all-events/${props.id}`} state={data}>
              <button className="h-3/4 text-white bg-orange-600 px-4 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-sm md:text-base">
                View all
              </button>
            </Link>
          </div>
      </div>
    </>
  );
}

export default EventTab;
