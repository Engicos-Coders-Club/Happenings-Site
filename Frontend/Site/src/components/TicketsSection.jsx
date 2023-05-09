// ! Tickets Section => Passes/Tickets
import Tickets from "./Tickets";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/SideBar";

function TicketsSection(props) {
  const { title } = props;
  useEffect(() => {
    document.title = title || "Tickets";
  }, []);

  return (
    <div className="mx-auto md:pl-16 bg-black text-white h-screen">
      {/* <Navbar />
        <SideBar /> */}
      <div className="py-16 h-screen">
        <div className="w-[80vw] md:w-[60vw] mx-auto">
          <h1
            className="uppercase text-5xl md:text-7xl font-bold"
            style={{ fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif" }}
          >
            Get your <span className="text-cus-bright-orange">Tickets</span> Now
          </h1>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <p
            id="Shine"
            className="font-MANGO text-3xl xs:text-5xl sm:text-8xl text-cus-bright-orange font-extrabold tracking-widest"
          >
            COMING SOON
          </p>
        </div>

        {/* <div className='flex flex-wrap w-[80vw] md:w-[60vw] justify-center gap-5 mx-auto mt-12'>
                    <Tickets price={300} ticket="ticket1" day="Day 1" date="19 May 2023 , 9:00 AM"/>
                    <Tickets price={300} ticket="ticket2"day="Day 2"date="20 May 2023 , 9:00 AM"/>
                    <Tickets price={700} ticket="ticket3" day="2 Day Pass" date="19 & 20 May 2023 , 9:00 AM"/>
                </div> */}
      </div>
    </div>
  );
}

export default TicketsSection;
