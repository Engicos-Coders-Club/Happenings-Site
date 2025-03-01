import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import footerImg from "../assets/footer.webp";
// import GeneralRuleModal from "./GeneralRuleModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Venue() {
  // const [rulesModal, showRulesModal] = useState(false);

  // const toggleRule = () => {
  //     showRulesModal(!rulesModal);
  // };

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: "#venue",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .to("#VenueSide", {
          textDecoration: "underline",
          onComplete: () => {
            gsap.to("#VenueSide", { textDecoration: "none" });
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="venue"
      className="h-fit relative z-5"
      style={{
        background: `url(${footerImg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex gap-12 flex-col md:flex-row items-center justify-center relative z-20 py-12 w-4/5 mx-auto">
        <div className="font-satoshi md:text-left md:mr-5 md:w-3/5">
          <div className="mb-10">
            <div
              className={
                "font-bold text-white text-7xl md:text-8xl uppercase tracking-widest font-MANGO md:mb-10"
              }
            >
              VENUE
            </div>
            <div className="font-Merriweather leading-relaxed flex items-center text-sm font-normal text-white md:mr-10">
              {window.innerWidth > 500
                ? "The Manohar Parrikar Stadium, located in the town of Navelim in South Goa, is a multi-purpose sports facility that serves as the home ground of the Goa Professional League football team, Sporting Clube de Goa. The stadium was built in 1989 and has a seating capacity of 8,000 spectators. It was named after the former Chief Minister of Goa, Manohar Parrikar, who played an instrumental role in the development of sports infrastructure in the state. The Manohar Parrikar Stadium is a popular venue for sports enthusiasts in Goa and is known for its lively atmosphere during matches."
                : "Manohar Parrikar Stadium in Navelim, South Goa is a sports facility, home ground of Sporting Clube de Goa with a seating capacity of 8,000 spectators. It was named after former Goa Chief Minister, who played a vital role in state's sports infrastructure development. The stadium is a popular sports venue in Goa known for its lively atmosphere during matches."}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.122373779684!2d73.96642201484825!3d15.261120889384564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb39d51852b17%3A0xa706b3fadb014ec0!2sManohar%20Parrikar%20Indoor%20Stadium!5e0!3m2!1sen!2sin!4v1683036376012!5m2!1sen!2sin"
            alt="Manohar Parrikar Indoor Stadium"
            className="max-w-[100vw] xl:w-[500px] xl:h-[300px] w-[350px] h-[200px] md:w-[350px] md:h-[350px] xmd:w-[400px] avg:h-[20rem] xsm:h-[300px] sm:ml-0 mr-[2%] md:mr-0 rounded-mid border-custom-red border-2"
          />
          {/* <div className="py-7"> */}
          <a
            href="https://www.google.com/maps/place/Manohar+Parrikar+Indoor+Stadium/@15.261121,73.968611,16z/data=!4m6!3m5!1s0x3bbfb39d51852b17:0xa706b3fadb014ec0!8m2!3d15.2611209!4d73.9686107!16s%2Fg%2F11kw8dk977?hl=en"
            target="_blank"
            rel="noreferrer"
            className="border-red-500 border w-fit rounded-md p-3 my-7 mx-auto text-white py-1 hover:scale-105 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-between gap-2 uppercase font-MANGO"
          >
            Navigate
            <FiArrowUpRight size={20} />
          </a>

          {/* </div> */}
        </div>
      </div>

      {/* {rulesModal && <GeneralRuleModal toggleRule={toggleRule} />} */}

      <div className=" text-white ">
        {/* put the bg */}
        <div className="text-white pb-20">
          <div className="w-11/12 md:w-[70vw] mx-auto pt-8">
            <div className="mx-auto mt-8">
              <div className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-10 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
                <h3 className="text-3xl md:text-7xl text-center text-orange-600 uppercase font-MANGO">
                  Registration
                </h3>
                <div className="text-center font-Merriweather text-sm font-light">
                  Join in and register your college for the biggest college
                  fests in Goa!
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    disabled="true"
                    className="bg-orange-600 w-fit rounded-md px-5 mx-auto text-white py-1 md:scale-110 hover:bg-orange-700 text-2xl tracking-wider flex items-center justify-between gap-2 uppercase"
                    style={{ fontFamily: "'MangoGrotesque', 'Oswald'" }}
                  >
                    college registration <FiArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8">
              <div className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-10 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
                <h3 className="text-3xl md:text-7xl text-center text-orange-600 uppercase font-MANGO">
                  Event Selection
                </h3>
                <div className="text-center font-Merriweather text-sm font-light">
                  Are you a college coordinator ? Manage your participants here!
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    disabled="true"
                    className="bg-orange-600 w-fit rounded-md px-5 mx-auto text-white py-1 md:scale-110 hover:bg-orange-700 text-2xl tracking-wider flex items-center justify-between gap-2 uppercase"
                    style={{ fontFamily: "'MangoGrotesque', 'Oswald'" }}
                  >
                    Event Registeration <FiArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
