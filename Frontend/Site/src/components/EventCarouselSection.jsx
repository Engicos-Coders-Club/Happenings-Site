import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
// import { eventsData } from "../data/EventTabData";
import { getCategories } from "../actions/categories";
import { useDispatch, useSelector } from "react-redux";
import eventSecBg from "../assets/h1.png";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import EventTab from "./EventTab";

const EventCarouselSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories } = useSelector((state) => state.category);

  return (
    <>
      <section
        id="Eventsec"
        className="h-full py-10"
        style={{
          fontFamily: "MangoGrotesque",
          display: "grid",
          gridTemplateRows: "15% 75%",
          background: `url(${eventSecBg}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div
          id="Eventsectop"
          className="h-max px-10 w-full md:max-w-[90%] md:w-full mx-auto flex justify-between items-center flex-wrap"
        >
          <p className="font-bold text-white text-7xl md:text-8xl uppercase tracking-widest">
            EVENTS
          </p>

          <div className="flex items-center flex-wrap md:justify-end gap-3">

            {/* <Link to="/auth"> */}
              <button disabled className="flex items-center  bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase text-white cursor-pointer"   >
                <span
                  className={`text-lg lg:text-xl font-semibold tracking-wide`}
                  style={{ fontFamily: "MangoGrotesque" }}
               
                >
                  Buy Passes Now
                </span>
                <FiArrowUpRight
                  className="flex mx-2 items-center justify-center"
                  size={25}
                />
              </button>
            {/* </Link> */}

            <Link to="/all-events/">
              <button className="flex items-center text-orange-600 border-2 border-orange-600 px-2 md:px-5 py-2 rounded-md hover:text-white hover:bg-orange-600 hover:scale-105 uppercase cursor-pointer">
                <span
                  className={`text-lg lg:text-xl font-semibold tracking-wide `}
                  style={{ fontFamily: "MangoGrotesque" }}
                >
                  View All
                </span>
                <FiArrowUpRight
                  className="flex mx-0 md:mx-2 items-center justify-center"
                  size={25}
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Slider Section */}
        {/* <div className="overflow-x-hidden mt-12 md:pl-16"> */}
        {/* Slider Area */}

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper my-8"
        >
          {categories
            ? categories.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <EventTab
                      img={data.category_img}
                      eventName={data.category_name}
                      id={data.id}
                      key={data.id}
                    />
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
        {/* {eventsData.map((event, id) => {
              return (
                <EventTab
                  img={event.img}
                  eventName={event.eventName}
                  key={id}
                />
              );
            })} */}
      </section>
    </>
  );
};
export default EventCarouselSection;
