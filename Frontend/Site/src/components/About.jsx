// import { Merriweather } from 'next/font/google'
// import localFont from 'next/font/local'
import { socials } from '../data/socials'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// const merriweather = Merriweather({ subsets: ['latin'], weight:'400',style:'normal' })
// const mangogrotesque = localFont({src:'../fonts/MangoGrotesque/Variable-TT/Mango Grotesque-VF.ttf'})

function About() {
    return (
        <>
            <main className='bg-black text-white min-h-screen'>
                <div className='w-4/5 mx-auto'>
                    <h1 className={`font-bold text-7xl md:text-8xl pt-20 uppercase tracking-widest`} style={{'fontFamily':'MangoGrotesque'}}>About</h1>
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
                            <p className={`tracking-wider text-[12px] md:text-sm`} style={{'fontFamily':'Merriweather'}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis? Omnis voluptatum assumenda numquam eaque minima ipsum iste consectetur unde atque harum debitis facere ullam sunt repellat similique tempore nostrum, a laboriosam. Recusandae placeat quas ullam mollitia in nobis vel dolorum aliquam qui! Nemo harum minus beatae praesentium nihil ab molestiae tenetur officia fugiat. Id repellendus voluptate eius ducimus voluptates deserunt tempore quod minus facere adipisci officia, maiores quisquam provident itaque tempora mollitia. Vitae, nisi tempora! Quaerat velit dolores porro quia alias quas tempore sed quis. Provident atque illo natus hic quisquam dicta aspernatur nulla amet facilis, aliquam voluptatum ad. Repudiandae provident eos velit deserunt corrupti quis, sapiente autem accusamus! Tempora dolor eaque exercitationem itaque. Libero atque excepturi necessitatibus beatae laborum vero facere molestiae dignissimos reiciendis similique quasi totam quam architecto facilis corrupti voluptatum, aliquam officiis repellendus voluptates laudantium at sequi earum. Eum incidunt aliquam blanditiis amet quas consectetur praesentium earum maxime itaque nesciunt id in nemo magni sit possimus numquam impedit saepe magnam, aspernatur eius suscipit ducimus facilis doloribus! Sint velit sapiente repellendus rem voluptas aspernatur tempora tenetur doloribus.
                            </p>
                            <div className='flex justify-end items-center mt-10'>
                                <Link to="/register"><button className='flex mr-10 bg-orange-600 px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0'><span className={`text-2xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link>
                            </div>
                        </div>
                        <div className="mb-3 md:mx-auto">
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline pb-2 tracking-wider text-center`} style={{'fontFamily':'MangoGrotesque'}}>3K+ Attendes</p>
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider text-center`} style={{'fontFamily':'MangoGrotesque'}}>20+ Events</p>
                            <p className={`uppercase font-bold text-4xl md:text-6xl italic decoration-8 0-underline-offset-8 decoration-red-500 underline py-2 tracking-wider  text-center`} style={{'fontFamily':'MangoGrotesque'}}>DJ Night</p>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
export default About


