// ! About Section Page => /about
import { useEffect } from 'react'
import { socials } from '../data/socials'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { gecLogo } from '../assets'

// TODO: Change GEC LOGO

function About(props) {
    const { title } = props

    useEffect(() => {
        document.title = title
    }, [])
    return (
        <>
            <main className='bg-black text-white min-h-screen'>
                <div className='w-4/5 mx-auto pb-16'>
                    <div className='pt-8 flex justify-end'>
                        <img src={gecLogo} alt="GEC Logo" width={80} />
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
                    <div className='mt-6 flex flex-col-reverse md:flex md:flex-row'>
                        <div className="flex flex-col md:w-2/3">
                            <p className={`tracking-wider text-[12px] md:text-sm`} style={{ 'fontFamily': 'Merriweather' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum beatae, non odio mollitia asperiores maxime quia debitis ad nihil animi ea laboriosam provident quibusdam tempora velit reprehenderit eos architecto consequatur ipsum fugiat. Laborum quos consequuntur exercitationem. Ex magnam, ab nesciunt assumenda inventore odit? Fuga sit quam et harum sed autem velit in ea quisquam quas nulla eveniet sequi ex, perferendis quos nobis voluptatum? In ut molestiae facere debitis sint quod reprehenderit labore inventore? Deleniti, aliquid, nihil adipisci reiciendis ratione dignissimos eius animi nostrum cupiditate sapiente voluptas saepe magnam culpa ea minima veniam eaque. Nam consequatur praesentium possimus maxime velit.
                            </p>
                        </div>
                        <div className="mb-3 md:mx-auto">
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline pb-2 tracking-wider text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>3K+ Attendes</p>
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>20+ Events</p>
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider  text-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>DJ Night</p>
                        </div>
                    </div>
                    <div className='mx-auto border-orange-500 border-2 border-dotted p-3 w-full md:w-3/4 mt-8 rounded-tl-3xl rounded-br-3xl'>
                        <h3 className='uppercase text-6xl text-center' style={{ 'fontFamily': 'MangoGrotesque' }}>Get your <span className='text-red-500'>Tickets</span> Now</h3>
                        <p className='text-xl text-center mx-auto my-4' style={{ 'fontFamily': 'MangoGrotesque' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptate a recusandae nam, animi similique?</p>
                        <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><Link to="/register" className='flex justify-center items-center'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>View All Tickets</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></Link></button>
                    </div>
                </div>
            </main >
        </>
    )
}
export default About


