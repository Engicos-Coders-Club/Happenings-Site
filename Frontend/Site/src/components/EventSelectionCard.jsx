import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function EventSelectionCard(props) {
    const { event, isSelected } = props

    const isFull = event.no_of_participants == event.registered_participants ? true :false
    
    return (
        <div className={`border py-2 border-white ${event.status ? "bg-[#375703]" : isSelected ? "bg-[#b3b300]":null} max-w-[140px] md:min-w-fit`}>
            <div className="flex justify-between pr-3 items-center">
                <h1 className="text-white text-xl md:text-2xl tracking-wider uppercase font-bold px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>{event.event}</h1>
            </div>
            <p className="text-white text-lg md:text-xl px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>PARTTICIPANTS:{event.no_of_participants}</p>
            <p className="text-white text-lg md:text-xl px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>REGISTERED:{event.registered_participants}</p>
            <div className="h-[0.5px] bg-red-600 w-11/12 mx-auto"></div>
            <div className="flex items-center py-2">
                <p className="text-white text-lg md:text-xl px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>{isSelected ? "edit":"apply"}</p>
                {isSelected 
                    ? <Link to={`/participants/${event.id}`} state={{isFull}}><FiArrowUpRight /></Link>
                    : <Link to={'/event-registration'} state={{event_id:event.id,applied:false}}><FiArrowUpRight /></Link>
                }
            </div>
        </div>
    )
}

export default EventSelectionCard