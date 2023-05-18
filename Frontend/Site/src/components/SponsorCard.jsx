import { LazyLoadImage } from "react-lazy-load-image-component";
import Line from "../assets/Line.png";
import React, { useState, useEffect } from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Stylesheets/sponsors.css'

function SponsorCard(props) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="my-5 md:my-16">
      {/* <div className="hidden md:block w-full">
        <img src={Line} className="w-3/4 mx-auto" alt="" />
        <p className="md:text-5xl lg:text-6xl my-7 text-center font-semibold">{props.title}</p>
      </div>
      <div className="block md:hidden px-10 my-3">
        <img src={Line} width={screenSize.width - 40} alt="" />
        <p className="text-3xl sm:text-4xl text-center font-semibold">{props.title}</p>
      </div> */}
      <p className="text-3xl sm:text-6xl text-center font-semibold tracking-wide">{props.title}</p>

      <div className="flex justify-center my-3 w-4/5 mx-auto items-center flex-wrap">
        <div className="flex flex-wrap gap-7 items-center justify-center">
          {props.data.map((item, id) => {
            return (
              <div
                key={id}
                className={props.name}
                style={{ backgroundColor: item.color }}
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  <LazyLoadImage
                    width="full"
                    height="full"
                    alt="Sponsor logo"
                    className="w-full h-full object-contain rounded-xl mx-auto"
                    src={item.img}
                    effect="blur"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;
