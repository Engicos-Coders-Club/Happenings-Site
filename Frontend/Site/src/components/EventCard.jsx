// import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useState } from 'react'

function EventCard(props) {
    const { event } = props

    const [showEventModal, setShowEventModal] = useState(false)

    return (
        <div className={`w-[230px] h-[320px] bg-events-card bg-cover`}>
            {showEventModal && <Modal event_id={event.id} setShowEventModal={setShowEventModal}/>}
            <div className='flex justify-between items-center'>
                <p className='text-2xl tracking-wider font-semibold text-red-900 py-3 px-6' style={{'fontFamily':'MangoGrotesque'}}>Event</p>
                <Link to={event.link} className='mr-[4%]'><FiArrowUpRight color="black"/></Link>
            </div>

            <button onClick={()=>setShowEventModal(true)}>
            <div className='border border-red-950 w-[200px] mx-[8%] h-[125px] flex flex-col justify-center'>
                <p className='text-center text-red-900 text-4xl font-bold w-full' style={{'fontFamily':'MangoGrotesque'}}>{event?.event_name}</p>
                {/* <p className='text-center text-red-900 text-xl font-bold' style={{'fontFamily':'MangoGrotesque'}}>{event.title}</p> */}
            </div>
            </button>
            
            <div className="w-5/6 bg-red-950 mx-auto mt-5">
                <p className='text-white mx-2 uppercase font-bold py-1 text-sm' style={{'fontFamily':'Merriweather'}}>Coordinators</p>
                <div className='mx-2 pb-3'>
                    {event.coordinators.map((coordinator,index) => {
                        return (
                            <div className='flex items-center gap-x-2' key={index}>
                                <p className='text-center text-white text-[10px] uppercase' style={{'fontFamily':'Merriweather'}}>{coordinator?.name}</p>
                                <p className='text-center text-white text-[10px]' style={{'fontFamily':'Merriweather'}}>({coordinator?.phone})</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
            )
}

            export default EventCard