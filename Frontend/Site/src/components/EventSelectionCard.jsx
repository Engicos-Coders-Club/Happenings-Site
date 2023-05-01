import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function EventSelectionCard(props) {
    const { event, isSelected } = props
    return (
        <div className={`border py-2 border-white ${isSelected ? "bg-[#375703]" : "bg-[#474747]"} max-w-[140px] md:min-w-fit`}>
            <div className="flex justify-between pr-3 items-center">
                <h1 className="text-white text-xl md:text-2xl tracking-wider uppercase font-bold px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>{event.name}</h1>
            </div>
            <p className="text-white text-lg md:text-xl px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>{event.title}</p>
            <div className="h-[0.5px] bg-red-600 w-11/12 mx-auto"></div>
            <div className="flex items-center py-2">
                <p className="text-white text-lg md:text-xl px-3" style={{ 'fontFamily': 'Mangogrotesque' }}>{isSelected ? "edit":"apply"}</p>
                <Link to={event.link}><FiArrowUpRight /></Link>
            </div>
        </div>
    )
}

export default EventSelectionCard