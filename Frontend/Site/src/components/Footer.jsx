import HappeningLogo from "../assets/happening_logo.svg"
import GecLogo from "../assets/GEC_logo_white.svg"
import PersonPic from "../assets/person_placeholder.svg"
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp, FaMailBulk, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <>
        <div className="bg-black h-screen">
        <div className="container mx-auto py-10">
            <h1 className="text-center text-white text-3xl font-bold mb-6 uppercase">REACH OUT TO US AT email@email.com</h1>
            <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="flex justify-center items-center">
                <img src={GecLogo} alt="Logo 1" className="h-16 w-16 mr-4"/>
                <img src={HappeningLogo} alt="Logo 2" className="h-16 w-16"/>
                </div>

                <div className="flex items-center mt-4">
                <img src={PersonPic} className="h-24/3 mr-4" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg text-white font-bold uppercase">Sumit komarpant (General Secretary)</h2>
                    <div className="flex items-center">
                    <FaWhatsapp className="text-white mr-2" />
                    <p className="text-sm text-white"><a href="https://wa.me/1234567890">+1234567890</a></p>
                    </div>
                </div>
                </div>

                <div className="flex items-center mt-2">
                <img src={PersonPic} className="h-24/3 mr-4" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg text-white font-bold uppercase">Sarthak Bandodkar (Cultural Secretary)</h2>
                    <div className="flex items-center">
                    <FaWhatsapp className="text-white mr-2" />
                    <p className="text-sm text-white"><a href="https://wa.me/1234567890">+1234567890</a></p>
                    </div>
                </div>
                </div>

                <div className="mt-4 flex justify-center">
                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Buy Passes Now <FiArrowUpRight size={20} /></button>
                </div>
            </div>
            <div className="md:w-1/3">
                <div className="hidden md:block">
                <h2 className="text-lg font-bold mb-4">Website Title</h2>
                <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Events</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Sponsors</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Schedule</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Team</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Passes</a></li>
                </ul>
                </div>
                <div className="mt-5 mb-4 flex justify-center md:justify-start">
                <a href="#" className="text-gray-600 text-xl hover:text-blue-500 mr-4"><FaMailBulk/></a>
                <a href="#" className="text-gray-600 text-xl hover:text-blue-500 mr-4"><FaInstagramSquare/></a>
                <a href="#" className="text-gray-600 text-xl hover:text-blue-500"><FaLinkedin/></a>
                </div>
            </div>
            </div>
            <div className="mt-4 flex justify-center">
                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-orange-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit"><FiArrowUp/></button>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-6">
                <div>&copy; 2023 Happenings. All Rights Reserved.</div>
                <div>Powered by BlueSkript</div>
            </div>
            
        </div>
        </div>
        </>
    );
}

export default Footer;
