import Line from '../assets/Line.png'
import React, { useState, useEffect } from 'react'

function SponsorCard(props) {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  	}, [screenSize])

  return (

    
    <div className='my-5 md:my-16'>
        <div className="hidden md:flex items-center justify-around px-10">
            <img src={Line} width={screenSize.width - 400 - props.title.length} alt="" />
            <span className="md:text-5xl lg:text-6xl">{props.title}</span>
        </div>
        <div className="block md:hidden px-10 my-3">
            <img src={Line} width={screenSize.width - 40} alt="" />
            <p className="text-3xl sm:text-4xl text-right">{props.title}</p>
        </div>

        <div className="flex justify-center my-3">
            <div className="block w-full h-full sm:flex sm:justify-around">
                {
                    props.data.map((item,id)=>{
                        return(
                            <a href={item.link} key={id}><img className='hover:scale-105 w-1/2 m-auto my-5 sm:w-3/4 md:w-full md:m-0' src={item.img} /></a>
                        )
                    })
                }
            </div>
        </div>
    </div>            

    
  );
}

export default SponsorCard;
