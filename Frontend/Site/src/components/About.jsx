// ! About Section Page => /about
import { useEffect } from 'react'
import { socials } from '../data/socials'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { gecLogo } from '../assets'
import Navbar from '../components/navbar'
import SideBar from '../components/SideBar'

// TODO: Change GEC LOGO

function About(props) {
    const { title,animation } = props

    // useEffect(() => {
    //     document.title = title
    // }, [])
    return (
        
            <section id="about" className={'bg-[#171717ff] text-white min-h-screen will-change-transform '+animation}>
            <Navbar />
            <SideBar />
                <div className='w-4/5 mx-auto pb-16'>
                    <div className='pt-8 flex justify-end'>
                        {/* <img src={gecLogo} alt="GEC Logo" width={50} /> */}
                    </div>
                    <h1 className={`font-bold text-7xl md:text-8xl pt-8 uppercase tracking-widest`} style={{ 'fontFamily': 'MangoGrotesque' }}>About</h1>
                    <div className='flex gap-x-4 pt-5'>
                        {
                            socials.map((social) => {
                                return (
                                    <a href={social.link} target="_blank" key={social.link} className='hover:scale-125' rel="noopener noreferrer">
                                        <img src={social.img} alt="social" width={40} height={40} />
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className='mt-4 flex flex-col md:flex md:flex-row'>
                        <div className="flex flex-col md:w-2/3">
                            <p className={`py-3 md:py-0 md:text-xl`} style={{ 'fontFamily': 'Merriweather' }}>
                                "Happenings" was first started in 1981, making it the oldest and most popular college fest amongst the
                                youth of Goa. It is one of Goa's largest cultural festival, that provides the perfect platform for youngsters to demonstrate their talents. This is a one stop destination for unleashing the creative monster inside us.
                                This year we celebrate "Happenings 2023 " which will mark the 39th year celebration of the event.
                            </p>
                        </div>
                        <div className="my-3 md:my-0 md:mx-auto">
                            <p className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline pb-2 tracking-wider text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>3K+ EVENTS</p>
                            <p className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>20+ Events</p>
                            <p className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider  text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>DJ Night</p>
                        </div>
                    </div>
                    <div className='mx-auto border-orange-500 border-2 border-dotted p-3 w-full md:w-3/4 mt-8 rounded-tl-3xl rounded-br-3xl'>
                        <h3 className='uppercase text-5xl md:text-6xl text-center' style={{ 'fontFamily': 'MangoGrotesque' }}>Get your <span className='text-red-500'>Tickets</span> Now</h3>
                        {/* <p className='text-xl text-center mx-auto my-4 tracking-wide' style={{ 'fontFamily': 'MangoGrotesque' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptate a recusandae nam, animi similique?</p> */}
                        {/* <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4'><Link to="/register" className='flex justify-center items-center'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>View All Tickets</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></Link></button> */}
                        <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Coming soon ...</span></button>
                    </div>
                    <div className='mx-auto border-orange-500 border-2 border-dotted p-3 w-full md:w-3/4 mt-8 rounded-tl-3xl rounded-br-3xl'>
                        <h3 className='uppercase text-5xl md:text-6xl text-center' style={{ 'fontFamily': 'MangoGrotesque' }}>Rules <span className='text-red-500'>&</span> Points System</h3>
                        {/* <p className='text-xl text-center mx-auto my-4 tracking-wide' style={{ 'fontFamily': 'MangoGrotesque' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptate a recusandae nam, animi similique?</p> */}
                        {/* <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4'><Link to="/register" className='flex justify-center items-center'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>View All Tickets</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></Link></button> */}
                        <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4'><Link to="/GeneralRule"><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>View <FiArrowUpRight size={25} className="py-0.5"/></span></Link></button>
                    </div>
                </div>
            </section>

    )
}
export default About


