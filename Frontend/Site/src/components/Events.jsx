// ! Events Page Page => /events/event
import { useState } from 'react'
import eventsData from '../data/eventsData'
import EventCard from './EventCard'
function Events() {
    const { onStageEvents } = eventsData
    const [showEventModal, setShowEventModal] = useState(false)

    return (
        <div className=''>
            <div className='bg-events-bg min-h-screen'>
                <div className='w-[80vw] mx-auto py-16'>
                    <h1 className="uppercase text-[#F8E0B7] text-center text-5xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>OnStage Events</h1>
                    <div className="flex flex-wrap justify-center gap-5 md:gap-x-10 mt-14">
                        {onStageEvents.map((event) => {
                            return (
                                <div key={event.id} onClick={() => setShowEventModal(true)}>
                                    <EventCard key={event.id} event={event} onClick={() => console.log(showEventModal)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events