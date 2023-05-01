import React from 'react'
import { FaGit } from 'react-icons/fa'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin,FaGithub  } from 'react-icons/fa';

let D=true
function TeamCards(props) {

   if(Object.keys(props.data).length<=4)
   {
    D=false
   }
   else{
    D=true
   }

  
  return (
    <div className="relative w-[231px] h-[283px] ">
            <img src="/assets/ManCrying.png" className='h-[290px] w-full hover:opacity-70 hover:bg-red-700 '></img>
            <h2 className='absolute x-0 bottom-[-25px] text-white text-MANGO text-2xl'>{props.data.Name}</h2>
            <h3 className='absolute x-0 bottom-[-45px] text-white text-MANGO text-1xl'>{props.data.Designation}</h3>

            {
                D?
                (
                    <div className='absolute flex flex-right justify-start  x-0 bottom-[-90px] gap-x-2'>
                    <a href={'mailto'+props.data.email}><AiOutlineMail size={20} color="white" />:</a>
                    <a href={'tel'+props.data.Contact}><AiOutlinePhone size={20} color="white" /></a>
                    <a href={props.data.linkedin}><FaLinkedin size={20} color="white" /></a>
                    <a href={props.data.GitHub}><FaGit size={20} color="white" /></a>

                    </div>
                 ):
                 (
                    <div className='absolute flex flex-right justify-start  x-0 bottom-[-70px] gap-x-2'>
                    <a href={'tel'+props.data.Contact}><AiOutlinePhone size={20} color="white"/></a>
        
                    </div>
                 )
            }

      </div>
  )
}

export default TeamCards

