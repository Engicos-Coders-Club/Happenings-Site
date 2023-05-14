import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import loginBg from "../assets/events-bg.webp";

const Verifying = () => {
  return (
    <>
      <div
        className="text-white min-h-screen mx-auto mt-8"
        style={{
          background: `url('${loginBg}') no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-10 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
          <h3 className="text-3xl md:text-5xl text-center text-white uppercase font-MANGO">
            Verifying...
          </h3>
          <div className="w-4/5 md:w-full text-center font-Merriweather text-sm font-light">
            The admin will verify your payment as soon as possible. Please be
            patient.
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/">
              <button
                className="bg-orange-600 w-fit rounded-md px-5 mx-auto text-white py-1 md:scale-110 hover:bg-orange-700 text-2xl tracking-wider flex items-center justify-between gap-2 uppercase"
                style={{ fontFamily: "'MangoGrotesque', 'Oswald'" }}
              >
                Back to home <FiArrowUpRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Verifying;
