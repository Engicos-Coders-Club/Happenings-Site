import HappeningLogo from "../assets/happening_logo.svg"
import GecLogo from "../assets/GEC_logo_white.svg"
import PersonPic from "../assets/person_placeholder.svg"
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp, FaMailBulk, FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa"
import { footerleft, footerright } from '../assets'
import { HashLink} from "react-router-hash-link"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>

            <div className="bg-black">
                <div className="container mx-auto py-10">
                    <h1 className="text-center text-white md:text-3xl font-bold mb-6 uppercase">REACH OUT TO US AT gecstudentscouncil2022@gmail.com</h1>
                    <div className="flex flex-col md:flex-row md:justify-between md:w-3/5 md:mx-auto">
                        <div className="mb-6 md:mb-0 px-3 md:px-0">
                            <div className="flex justify-center items-center">
                                <img src={GecLogo} alt="Logo 1" className="h-16 w-16 mr-4" />
                                <img src={HappeningLogo} alt="Logo 2" className="h-16 w-16" />
                            </div>


                            <div className="flex items-center mt-4">
                                {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg text-white font-bold uppercase">Sumit komarpant (General Secretary)</h2>
                                    <div className="flex items-center">
                                        <FaWhatsapp className="text-white mr-2" />
                                        <p className="text-sm text-white"><a href="https://wa.me/+918767320956">+91 8767320956</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg text-white font-bold uppercase">Sarthak Bandodkar (Cultural Secretary)</h2>
                                    <div className="flex items-center">
                                        <FaWhatsapp className="text-white mr-2" />
                                        <p className="text-sm text-white"><a href="https://wa.me/+917057496089">+91 7057496089</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                {/* <img src={PersonPic} className="h-24/3 mr-4" /> */}
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg text-white font-bold uppercase">Akash Gauns (Sports Secretary)</h2>
                                    <div className="flex items-center">
                                        <FaWhatsapp className="text-white mr-2" />
                                        <p className="text-sm text-white"><a href="https://wa.me/917768804271">+91 7768804271</a></p>
                                    </div>
                                </div>
                            </div>

                                {/* <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Buy Passes Now <FiArrowUpRight size={20} /></button> */}
                            {/* <div className="mt-4 flex justify-center">
                                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Coming soon ...</button>
                            </div> */}
                        </div>
                        <div className="md:w-1/6">
                            <div className="hidden md:block">
                                <h2 className="text-lg font-bold mb-4">Website Title</h2>
                                <ul className="list-none">
                                    <li className="mb-2"><HashLink smooth to="#home" className="text-gray-600 hover:text-blue-500">Home</HashLink></li>
                                    <li className="mb-2"><HashLink smooth to="#events" className="text-gray-600 hover:text-blue-500">Events</HashLink></li>
                                    {/* <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Sponsors</a></li> */}
                                    <li className="mb-2"><HashLink smooth to="#schedule" className="text-gray-600 hover:text-blue-500">Schedule</HashLink></li>
                                    <li className="mb-2"><Link to="/Teams/" className="text-gray-600 hover:text-blue-500">Team</Link></li>
                                    <li className="mb-2"><Link to="/college-registration" className="text-gray-600 hover:text-blue-500">College Registration</Link></li>
                                    <li className="mb-2"><Link to="/tickets" className="text-gray-600 hover:text-blue-500">Tickets</Link></li>
                                </ul>
                            </div>
                            <div className="mt-5 mb-4 flex justify-center md:justify-start">
                                <a href="mailto:gecstudentscouncil2022@gmail.com" target="_blank" rel="noreferrer" className="text-gray-600 text-xl hover:text-blue-500 mr-4"><FaMailBulk /></a>
                                <a href="https://instagram.com/happenings2023?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="text-gray-600 text-xl hover:text-blue-500 mr-4"><FaInstagramSquare /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit"><HashLink smooth to="/#home"><FiArrowUp /></HashLink></button>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 mt-6 px-4 md:w-3/5 md:mx-auto">
                        <div>&copy; 2023 Happenings. All Rights Reserved.</div>
                        <div>Powered by <a className="text-gray-500 hover:text-blue-500 underline" href="https://blueskript.com/" target="_blank" rel="noopener noreferrer">Blueskript</a></div>
                    </div>
                </div>
                <div className="flex justify-between py-3 px-2">
                    <img src={footerleft} className="bottom-0 left-2" width={200} />
                    <img src={footerright} className="bottom-0 right-2" width={200} />
                    {/* <img src = {footerright} className="relative bottom-0 right-0" width={30}/> */}
                </div>
            </div>

        </>
    );
}

export default Footer;
