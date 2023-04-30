// ! Tickets Section => Passes/Tickets
import Tickets from "./Tickets"
import { useEffect } from "react"

function TicketsSection(props) {
    const {title} = props
    useEffect(() => {
        document.title = title || "Tickets"
    }, [])
    
    return (
        <div className="mx-auto bg-black text-white min-h-screen">
            <div className="py-16">
                <div className="w-[80vw] md:w-[60vw] mx-auto">
                <h1 className='uppercase text-7xl' style={{ 'fontFamily': 'MangoGrotesque' }}>Get your <span className='text-red-500'>Tickets</span> Now</h1>
                </div>
                <div className='flex flex-wrap w-[80vw] md:w-[60vw] justify-center gap-5 mx-auto mt-12'>
                    <Tickets price={300} ticket="ticket1" day="Day 1" date="19 May 2023 , 9:00 AM"/>
                    <Tickets price={300} ticket="ticket2"day="Day 2"date="20 May 2023 , 9:00 AM"/>
                    <Tickets price={700} ticket="ticket3" day="2 Day Pass" date="19 & 20 May 2023 , 9:00 AM"/>
                </div>
            </div>
        </div>
    )
}

export default TicketsSection