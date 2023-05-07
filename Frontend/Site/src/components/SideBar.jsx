import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SideButton from '../components//SideBarButton'
function SideBar(props) {
    let sideBarClass = 'absolute left-0 top-0 w-[70px] bg-[#171717ff] z-30 flex flex-wrap hidden md:block lg:block ' + props.className
    return (
        <div className={sideBarClass}>

            <div className='h-[5rem] w-full relative flex justify-center items-center cursor-pointer'>

            </div>

            <div className='h-[20%] w-full relative'>
                <HashLink smooth to="/#home"><img src="/assets/logo2.svg" className='p-2 h-full w-full'/></HashLink>                
            </div>

            <div className='relative h-[120%] w-full flex justify-center items-center'>
                <ul className='font-MANGO sm:text-1.5xl lg:text-2xl text-sm text-white list-none flex flex-col p-2 cursor-pointer gap-4'>
                    <li className={`rotate-[-90deg] p-3 hover:underline tracking-wide min ${props.select? "underline":"" }`}><HashLink smooth to="/#about">ABOUT</HashLink></li>
                    <li className={`rotate-[-90deg] p-5 hover:underline tracking-wide ${props.select? "underline":"" }`}><HashLink smooth to="/#Eventsec">EVENTS</HashLink></li>
                    <li className={`rotate-[-90deg] p-2 hover:underline tracking-wide ${props.select? "underline":"" }`}><HashLink smooth to="/#schedule">SCHEDULE</HashLink></li>
                    {/* <li className='rotate-[-90deg] p-2 hover:underline tracking-wide'><HashLink smooth to="/#sponsor">SPONSORS</HashLink></li> */}
                    <li className={`rotate-[-90deg] p-3 hover:underline tracking-wide ${props.select? "underline":"" }`}><HashLink smooth to="/#venue">VENUE</HashLink></li>
                    <li className={`rotate-[-90deg] p-5 hover:underline tracking-wide text-orange-500 ${props.select? "underline":"" }`}><Link smooth to="/tickets">TICKETS</Link></li>
                </ul>

            </div>

            <div className='relative h-[4px] bg-orange-500 rounded-sm'>
                
            </div>




        </div>
    )
}

export default SideBar