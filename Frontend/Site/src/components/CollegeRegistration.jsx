import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

/*
TODO:
1. Put brick image as background
2. Blur background image when it is front of form
3. Validation
 */

function CollegeRegistration() {
    const [collegeData, setCollegeData] = useState({ collegeName: '', GSName: "", GSphoneNumber: "", phoneNumber: "", CSName: "", CSPhoneNumber: "", })

    const handleChange = (e) => {
        setCollegeData({ ...collegeData, [e.target.name]: e.target.value })
    }
    return (
        <div className="mx-auto bg-black min-h-screen text-white bg-events-bg">
            <div className="pt-20">
                <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-[300px]">
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3" style={{ 'fontFamily': 'MangoGrotesque' }}>Register College</h1>
                </div>
                <div className="w-[90vw] md:w-[60vw] mx-auto border-orange-700 border-4 mt-10 py-10 border-dotted backdrop-blur-3xl">
                    <form className="flex flex-col gap-y-5 w-3/4 mx-auto py-10">
                        <div className='leading-8 flex flex-col'>
                            <label className="italic py-2 text-sm" style={{ 'fontFamily': 'Merriweather' }}>College Name</label>
                            <input type="text" name="collegeName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'Merriweather' }}/>
                        </div>
                        <div className='flex flex-col leading-8'>
                            <label className="italic py-2 text-sm" style={{ 'fontFamily': 'Merriweather' }}>General Secretary Name</label>
                            <input type="text" name="GSName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'Merriweather' }}/>
                        </div>
                        <div className='flex flex-col leading-8'>
                            <label className='italic py-2 text-sm' style={{ 'fontFamily': 'Merriweather' }}>Phone Number</label>
                            <input type="tel" name="GSphoneNumber" className="border border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'Merriweather' }}/>
                        </div>
                        <div className='flex flex-col leading-8'>
                            <label className='text-sm py-2' style={{ 'fontFamily': 'Merriweather' }}>Cultural Secretary Name</label>
                            <input type="text" name="CSName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'Merriweather' }}/>
                        </div>
                        <div className='flex flex-col leading-8'>
                            <label className='italic py-2 text-sm' style={{ 'fontFamily': 'Merriweather' }}>Phone Number</label>
                            <input type="tel" name="phoneNumber" className="border border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent" onChange={handleChange} style={{ 'fontFamily': 'Merriweather' }}/>
                        </div>
                        <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white font-bold py-1 flex justify-center items-center bg-black hover:scale-125 hover:bg-red-600 text-sm" style={{ 'fontFamily': 'Merriweather' }} type="submit">Register College <FiArrowUpRight size={20} /></button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CollegeRegistration