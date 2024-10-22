import HappeningLogo from "../assets/happening_logo.svg";
import GecLogo from "../assets/GEC_logo_white.svg";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { footerleft, footerright } from "../assets";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}

function Footer() {
  return (
    <div className="bg-[#0C0B09] px-4 relative z-10">
      <div className="container mx-auto py-10">
        <h1
          id="footer-email"
          className="text-center font-MANGO text-[1.6rem] md:text-6xl tracking-widest mb-12"
        >
          REACH OUT TO US AT <br />{" "}
          <a href="mailto:gecstudentscouncil2022@gmail.com">
            gecstudentscouncil2022@gmail.com
          </a>
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:w-3/5 md:mx-auto">
          <div className="mb-6 md:mb-0 px-3 md:px-0 flex flex-col items-center md:items-start justify-center">
            <div className="flex justify-center md:justify-start items-center">
              <img src={GecLogo} alt="Logo 1" className="h-16 w-16 mr-4" />
              <img src={HappeningLogo} alt="Logo 2" className="h-16 w-16" />
            </div>

            <div className="flex items-center w-full justify-center text-center mt-6 md:justify-start">
              {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
              <div className="flex flex-col justify-center md:justify-start">
                <h2 className="font-MANGO flex items-center justify-center md:justify-start gap-x-2 text-2xl flex-wrap tracking-widest text-white font-bold uppercase">
                  Sumit komarpant{" "}
                  <span className="text-lg basis-full md:basis-auto text-gray-400">
                    (General Secretary)
                  </span>
                </h2>
                <div className="flex items-center justify-center md:justify-start">
                  <FaWhatsapp className="text-white mr-2" />
                  <p className="text-xs text-white font-Merriweather">
                    <a href="https://wa.me/+918767320956">+91 8767320956</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-center text-center mt-6 md:justify-start">
              {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
              <div className="flex flex-col justify-center md:justify-start">
                <h2 className="font-MANGO flex items-center justify-center md:justify-star gap-x-2 text-2xl flex-wrap tracking-widest text-white font-bold uppercase">
                  Sarthak Bandodkar{" "}
                  <span className="text-lg basis-full md:basis-auto text-gray-400">
                    (Cultural Secretary)
                  </span>
                </h2>
                <div className="flex items-center justify-center md:justify-start">
                  <FaWhatsapp className="text-white mr-2" />
                  <p className="text-xs text-white font-Merriweather">
                    <a href="https://wa.me/+917057496089">+91 7057496089</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-center text-center mt-6 md:justify-start">
              {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
              <div className="flex flex-col justify-center md:justify-start">
                <h2 className="font-MANGO flex items-center justify-center md:justify-start gap-x-2 text-2xl flex-wrap tracking-widest text-white font-bold uppercase">
                  Ruthveek Dessai{" "}
                  <span className="text-lg basis-full md:basis-auto text-gray-400">
                    (Chairman)
                  </span>
                </h2>
                <div className="flex items-center justify-center md:justify-start">
                  <FaWhatsapp className="text-white mr-2" />
                  <p className="text-xs text-white font-Merriweather">
                    <a href="https://wa.me/9193099 81749">+91 93099 81749</a>
                  </p>
                </div>
              </div>
            </div>
            {/* <Link to="/teams" className="w-max"> */}
           
            {/* </Link> */}
            {/* <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Buy Passes Now <FiArrowUpRight size={20} /></button> */}
            {/* <div className="mt-4 flex justify-center">
                                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Coming soon ...</button>
                            </div> */}
          </div>
          <div className="flex flex-col justify-center items-center md:items-start md:w-1/6">
            <div className="hidden md:block">
              <h2 className="text-4xl uppercase mt-4 font-bold mb-4 text-gray-400 font-MANGO">
                Website links
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <HashLink
                    smooth
                    to="#home"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Home
                  </HashLink>
                </li>
                {/* <li className="mb-2">
                  <HashLink
                    smooth
                    to="#events"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Events
                  </HashLink>
                </li> */}
                {/* <li className="mb-2"><a href="#" className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange">Sponsors</a></li> */}
                <li className="mb-2">
                  <HashLink
                    smooth
                    to="#schedule"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Schedule
                  </HashLink>
                </li>
                <li className="mb-2">
                  <a
                    href="#sponsor"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Sponsors
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to="/GeneralRule"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Rules
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link
                    to="/college-registration"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    College Registration
                  </Link>
                </li> */}
                {/* <li className="mb-2">
                  <Link
                    to="/tickets"
                    className="text-gray-400 font-Merriweather text-sm hover:text-cus-orange"
                  >
                    Tickets
                  </Link>
                </li> */}
              </ul>
            </div>
            
            <div className="mt-5 mb-4 flex justify-center items-center md:justify-start">
              <a
                href="mailto:gecstudentscouncil2022@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-cus-orange hover:text-cus-bright-orange mr-4"
              >
                <HiOutlineMail />
              </a>
              <a
                href="https://instagram.com/happenings2023?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-cus-orange hover:text-cus-bright-orange mr-4"
              >
                <BsInstagram />
              </a>
            </div>
            <Link
              to="/teams"
              className="w-max flex text-white px-2 md:px-5 py-2 rounded-md border-2 border-cus-orange hover:bg-cus-orange uppercase mt-5"
            >
              <span
                className={`text-base lg:text-xl font-semibold tracking-wide font-MANGO`}
              >
                the team
              </span>
              <FiArrowUpRight
                className="flex mx-2 items-center justify-center"
                size={25}
              />
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="border-red-500 border w-fit rounded-full p-3 mx-auto text-white bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
            title="scroll to top"
          >
            <HashLink smooth to="/#home">
              <FiArrowUp />
            </HashLink>
          </button>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 mt-6 px-4 md:w-3/5 md:mx-auto">
          <div>&copy; 2023 Happenings. All Rights Reserved.</div>
          <div>
            Powered by{" "}
            <a
              className="text-gray-500 hover:text-blue-500 underline"
              href="https://blueskript.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueskript
            </a>
          </div>
        </div>
      </div>
      <LazyLoadComponent>
        <div className="flex justify-between py-3 px-2">
          <img
            src={getImageUrl(footerleft)}
            className="bottom-0 left-2"
            width={150}
          />
          <img
            src={getImageUrl(footerright)}
            className="bottom-0 right-2"
            width={150}
          />
          {/* <img src = {footerright} className="relative bottom-0 right-0" width={30}/> */}
        </div>
      </LazyLoadComponent>
    </div>
  );
}

export default Footer;
