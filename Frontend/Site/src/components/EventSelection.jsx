//! Event Selection Page => register/events

import { useEffect } from "react"
import eventsData from "../data/eventsData"
import EventSelectionCard from "./EventSelectionCard"

function EventSelection(props) {
    const {onStageEvents} = eventsData
    const { title } = props

    useEffect(() => {
        document.title = title
    }, [])
    return (
        <div className="mx-auto bg-black text-white min-h-screen">
            <div className="py-16">
                <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-[50%] md:w-[350px]">
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3" style={{ 'fontFamily': 'MangoGrotesque' }}>Select Event</h1>
                </div>
                <div className='w-[80vw] md:w-[60vw] mx-auto pt-8'>
                    <h1 className="uppercase text-[#F8E0B7] text-4xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>On-Stage Events</h1>
                    <div className="flex flex-wrap gap-5 md:gap-x-10 mt-4">
                        {
                            onStageEvents.map((event,index) => {
                                return (
                                        <EventSelectionCard key={event.id} event={event} isSelected={index == 1? true:false}/>
                                )
                            })
                        }
                        <EventSelectionCard key={4} event={onStageEvents[0]} /> {/*Remove this, Just put to test here */}
                    </div>
                </div>
                <div className='w-[80vw] md:w-[60vw] mx-auto pt-8'>
                    <h1 className="uppercase text-[#F8E0B7] text-4xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>On-Stage Events</h1>
                    <div className="flex flex-wrap gap-5 md:gap-x-10 mt-4">
                        {
                            onStageEvents.map((event) => {
                                return (
                                        <EventSelectionCard key={event.id} event={event}/>
                                )
                            })
                        }
                        <EventSelectionCard key={4} event={onStageEvents[0]} /> {/*Remove this, Just put to test here */}
                    </div>
                </div>
                <div className='w-[80vw] md:w-[60vw] mx-auto pt-8'>
                    <h1 className="uppercase text-[#F8E0B7] text-4xl font-bold" style={{ 'fontFamily': 'MangoGrotesque' }}>On-Stage Events</h1>
                    <div className="flex flex-wrap gap-5 md:gap-x-10 mt-4">
                        {
                            onStageEvents.map((event) => {
                                return (
                                        <EventSelectionCard key={event.id} event={event} />
                                )
                            })
                        }
                        <EventSelectionCard key={4} event={onStageEvents[0]}/> {/*Remove this, Just put to test here */}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default EventSelection