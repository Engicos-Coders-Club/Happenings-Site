import React, { Component } from 'react'

export class SideBarButton extends Component {
  render() {
    return (
       
        <div className='border-orange-500  text-white text-[10px] w-full h-[2rem] border-2 cursor-pointer relative rounded-[30%]'>
            <div className='border-orange-500  text-white text-[1.2rem] w-full h-full border-2 flex justify-center items-center cursor-pointer absolute top-[-3px] rounded-[30%] tracking-wide p-3'>PASSES</div>
        </div>
  
    )
  }
}

export default SideBarButton