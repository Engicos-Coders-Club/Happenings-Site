// ! Book Tickets Section => Passes/Book
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

function BookTickets(props) {
    const { title } = props;
    const [paymentData, setPaymentData] = useState("")
    const navigate = useNavigate()

    // Variable for testing
    const quantity = 1, ticket = "ticket1", day = "Day 1", date = "19 May 2023 , 9:00 AM", price = 300

    const goBack = () => {
        navigate("/tickets")
    }

    const handleChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        document.title = title || "Book Tickets"
    }, [])
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="bg-black text-white pb-20">

                <div className="w-11/12 md:w-[60vw] mx-auto pt-8">
                    {/* Back to Tickets Button */}
                    <div className="flex items-center justify-start">
                        <FiArrowLeft size={40} onClick={goBack} className="cursor-pointer border-red-600 border p-2 hover:bg-red-600 hover:border-none hover:scale-125" />
                        <p className="px-3 md:px-5 text-3xl md:text-4xl" style={{ 'fontFamily': "Mangogrotesque" }}>Back to Tickets</p>
                    </div>
                    <div className="flex justify-around mt-8 flex-col md:flex-row w-5/6 mx-auto">
                        {/* Tickets */}
                        <div className={`bg-${ticket} w-[300px] h-[170px] flex-col justify-center mb-5`}>
                            <p className="text-3xl font-bold mt-4 px-12 text-black uppercase" style={{ 'fontFamily': "Mangogrotesque" }}>Ticket</p>
                            <p className="text-5xl font-bold mt-2 px-12 text-black uppercase" style={{ 'fontFamily': "Mangogrotesque" }}>{day}</p>
                            <p className="text-[22px] font-bold mt-2 px-12 uppercase" style={{ 'fontFamily': "Mangogrotesque" }}>Date: {date}</p>
                        </div>
                        {/* Checkout details */}
                        <div className="flex flex-col items-center justify-center mt-8">
                            <p className='uppercase text-3xl md:text-5xl font-bold text-center tracking-wider text-orange-600' style={{ 'fontFamily': 'MangoGrotesque' }}>Checkout details</p>
                            <div className="flex justify-between w-11/12 text-2xl md:text-3xl uppercase pt-4" style={{ 'fontFamily': 'MangoGrotesque' }}>
                                <p>Quantity</p>
                                <p className="text-red-500 text-xl">{quantity >= 10 ? quantity : `0${quantity}`}</p>
                            </div>
                            <div className="flex justify-between w-11/12 text-2xl md:text-3xl uppercase pt-4" style={{ 'fontFamily': 'MangoGrotesque' }}>
                                <p>Total Amount</p>
                                <p className="text-red-500">Rs. {quantity * price}</p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <div className='mx-auto mt-8'>
                        <h3 className='uppercase text-3xl md:text-5xl text-center text-orange-600' style={{ 'fontFamily': 'MangoGrotesque' }}>Enter your details</h3>
                        <form className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-3 mx-auto w-5/6">
                            <div className='leading-8 flex flex-col w-11/12 md:w-3/5 mx-auto'>
                                <label className="py-2 text-2xl" style={{ 'fontFamily': 'MangoGrotesque' }}>Name</label>
                                <input type="text" name="name" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'MangoGrotesque' }} />
                            </div>
                            <div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                <label className="py-2 text-2xl" style={{ 'fontFamily': 'MangoGrotesque' }}>Email</label>
                                <input type="email" name="email" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'MangoGrotesque' }} />
                            </div>
                            <div className='flex flex-col leading-8 mx-auto w-11/12 md:w-3/5 mt-2'>
                                <label className='py-2 text-2xl' style={{ 'fontFamily': 'MangoGrotesque' }}>Phone Number</label>
                                <input type="tel" name="phoneNumber" className="border border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'MangoGrotesque' }} />
                            </div>
                            <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><Link to="/pay" className='flex justify-center items-center'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Pay Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTickets