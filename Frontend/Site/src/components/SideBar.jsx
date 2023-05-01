import React from 'react'

function SideBar(props) {
  let sideBarClass='absolute left-0 top-0 w-[70px] bg-[#171717ff] z-30 flex flex-wrap hidden md:block lg:block'+ props.view
  return (
    <div className={sideBarClass}>

        <div className='h-[5rem] w-full relative flex justify-center items-center cursor-pointer'>      
          
        </div>

        <div className='h-[20%] w-full relative'>
            <img src="/assets/logo2.svg" className='p-2 h-full w-full'></img>
        </div>

        <div className='relative h-[120%] w-full flex justify-center items-center'>
            <ul className='font-MANGO sm:text-1.5xl lg:text-2xl text-sm text-white list-none flex flex-col p-2 cursor-pointer'>
                <li className='rotate-[-90deg] p-3 hover:underline'>ABOUT</li>
                <li className='rotate-[-90deg] p-5 hover:underline'>EVENTS</li>
                <li className='rotate-[-90deg] p-5 hover:underline'>SCHEDULE</li>
                <li className='rotate-[-90deg] p-2 hover:underline'>SPONSORS</li>
                <li className='rotate-[-90deg] p-2 hover:underline'>VENUE</li>
                <li className='rotate-[-90deg] p-5 hover:underline'>TEAM</li>
                <li className='rotate-[-90deg] p-5 text-orange-500'>REGISTER</li>
            </ul>    

        </div>
           
        <div  className='relative h-[20%] w-full flex justify-center items-center p-x-2 pt-8'>
            <div className='border-orange-500 rounded-[20px] text-white text-[10px] w-full h-full border-2 cursor-pointer absolute'>
                <div className='border-orange-500 rounded-[20px] text-white text-[10px] w-full h-full border-2 flex justify-center items-center cursor-pointer absolute top-[-3px]'>PASSES</div>
            </div>  
        </div>
        

    </div>
  )
}

export default SideBar