import Line from '../assets/Line.png'
import React, { useState, useEffect } from 'react'

function SponsorCard(props) {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
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


        return (() => {
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

            <div className="flex justify-center my-3 w-4/5 mx-auto items-center">
                <div className="flex flex-wrap gap-5 items-center justify-center">
                    {
                        props.data.map((item, id) => {
                            return (
                                <a href={item.link} key={id} target="_blank" rel="noreferrer"><img className='hover:scale-105 w-32 md:w-52 rounded-xl' src={item.img} /></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    );
}

export default SponsorCard;
