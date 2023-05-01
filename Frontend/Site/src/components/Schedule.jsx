import { FiArrowUpRight } from 'react-icons/fi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Modal1 from './Modal1'
// import Modal2 from './Modal2'


function Schedule() {


  return (
    <section className='bg-black h-[60vh]' style={{'fontFamily':'MangoGrotesque', 'display':'grid','grid-template-rows':'22% 55% 25%'}}>

        <div className='flex justify-center items-center'>
            <p className="text-3xl xs:text-4xl sm:text-5xl text-white font-extrabold">SCHEDULE</p>
        </div>
        
        <div className='flex justify-center items-center'>
            <p id="Shine" className="text-3xl xs:text-4xl sm:text-5xl text-orange-700 font-extrabold tracking-widest">COMING SOON</p>
        </div>


        

        <div className='flex items-start justify-center'>
          <Router>
            <Link to="/register"><button className='flex mr-10 bg-orange-600 px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0'><span className={`text-2xl font-semibold tracking-wide `}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link>
          </Router>
                  
        </div>
       


    </section>
  );
}

export default Schedule;
