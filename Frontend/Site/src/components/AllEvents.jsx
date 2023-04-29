// import React from 'react'
// ! Events Page Page => /events/all
import eventsData from '../data/eventsData'
import EventCard from './EventCard'

function Events() {
    const { onStageEvents, offStageEvents } = eventsData

    return (
        <div>
            <div className='bg-events-bg pt-20'>
                <div className="border-l border-r border-t border-red-600 mx-auto w-[300px]" >
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl py-2" style={{ 'fontFamily': 'MangoGrotesque' }}>All Events</h1>
                </div>

                <div className='w-[80vw] mx-auto py-16'>
                    <h1 className="uppercase text-[#F8E0B7] text-center text-5xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>On-Stage Events</h1>
                    <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                        {onStageEvents.map((event) => {
                            return (
                                <EventCard key={event.id} event={event} />
                            )
                        })}
                    </div>
                </div>
                <div className='bg-events-bg'>
                    <div className='w-[80vw] mx-auto py-20'>
                        <h1 className='uppercase text-[#F8E0B7] text-center text-5xl font-bold' style={{ 'fontFamily': 'MangoGrotesque' }}>Off-Stage Events</h1>
                        <div className="flex flex-wrap justify-center gap-y-5 gap-x-10 mt-14">
                            {offStageEvents.map((event) => {
                                return (
                                    <EventCard key={event.id} event={event} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events