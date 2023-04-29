import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function EventSelectionCard(props) {
    const { event,isSelected } = props
    return (
        <div className={`border py-2 border-white ${isSelected?"bg-[#375703]":"bg-[#474747]"}`}>
            <div className="flex justify-between pr-3 items-center">
                <h1 className="text-white text-2xl tracking-wider uppercase font-bold px-3" style={{'fontFamily': 'Mangogrotesque'}}>{event.name}</h1>
                <Link to={event.link}><FiArrowUpRight /></Link>
            </div>
            <p className="text-white text-xl px-3" style={{'fontFamily': 'Mangogrotesque'}}>{event.title}</p>
        </div>
    )
}

export default EventSelectionCard