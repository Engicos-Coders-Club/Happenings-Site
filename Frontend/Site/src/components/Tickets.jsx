import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function Tickets(props) {
    const { price, ticket,date,day } = props
    return (
        <div className={`bg-[#474747] w-[320px] h-[250px] mx-auto flex bg-opacity-50 flex-col justify-center`}>
            <div className={`bg-${ticket} w-[300px] h-[170px] mx-auto flex-col justify-center mb-5`}>
                <p className="text-3xl font-bold mt-4 px-12 text-black uppercase" style={{'fontFamily':"Mangogrotesque"}}>Ticket</p>
                <p className="text-5xl font-bold mt-2 px-12 text-black uppercase" style={{'fontFamily':"Mangogrotesque"}}>{day}</p>
                <p className="text-[22px] font-bold mt-2 px-12 uppercase" style={{'fontFamily':"Mangogrotesque"}}>Date: {date}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-3xl font-extrabold px-5 uppercase" style={{'fontFamily':"Mangogrotesque"}}>Rs. {price}</p>
                <button className="flex text-xl mr-3 items-center border-white border px-4 rounded-xl hover:border-none hover:bg-orange-600 hover:scale-125" style={{'fontFamily':"Mangogrotesque"}}><Link to="/buy" className="flex uppercase">Buy <FiArrowUpRight size={20}/></Link></button>
            </div>
        </div>
    )
}

export default Tickets