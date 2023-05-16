import React from "react";
import { HiPhone } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href
}

function TeamCards(props) {
  return (
    <div className="team-card relative h-max group transition-all duration-150 delay-100">
      <div className="h-[290px] w-[250px] grayscale">
      <LazyLoadImage
          src={getImageUrl(props.data.pic)}
          className="w-full h-full object-cover"
          width="100%"
          height="100%"
          effect="blur"
          alt={props.data.Name + "'s image"}
        />
      </div>
      <h2 className="team-name relative x-0 bottom-[25px] text-white group-hover:text-cus-bright-orange capitalize font-MANGO text-5xl drop-shadow-sm">
        {props.data.Name}
      </h2>
      <h3 className="relative x-0 bottom-[27px] text-white font-basic text-lg">
        {props.data.Designation}
      </h3>
      <div className="relative bottom-[30px] flex justify-start text-gray-400 group-hover:text-white gap-x-1 font-basic items-center">
        <HiPhone size={15} className="group-hover:text-cus-bright-orange" />
        <p>{props.data.Contact}</p>
      </div>
    </div>
  );
}

export default TeamCards;
