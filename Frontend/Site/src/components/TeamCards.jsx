import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai';

function TeamCards(props) {
  
  return (
    <div className="relative w-[231px] h-[283px] ">
            <img src={props.data.pic} className='h-[290px] w-full hover:opacity-70 hover:bg-red-700 '></img>
            <h2 className='absolute x-0 bottom-[-25px] text-white text-MANGO text-2xl'>{props.data.Name}</h2>
            <h3 className='absolute x-0 bottom-[-45px] text-white text-MANGO text-1xl'>{props.data.Designation}</h3>
            <div className='absolute flex flex-right justify-start  x-0 bottom-[-70px] gap-x-2'>
            <a href={'tel'+props.data.Contact}><AiOutlinePhone size={20} color="white"/></a>        
            </div>
      </div>
  )
}

export default TeamCards

