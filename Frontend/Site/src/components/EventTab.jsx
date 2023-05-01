import { FiArrowUpRight } from 'react-icons/fi'
import {
  Link
} from "react-router-dom";

function EventTab(props) {
  const clip={'clip-path': 'polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)', 'transition':'transform 0.4s'}
  
  return (
    <>
      

        {/* Event Tab */}
        <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
            
            {/* Image */}
            <div className='w-full h-full cursor hover:scale-105' style={clip}>
                <Link to="/"><img src={props.img} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' /></Link>
            </div>

            {/* Text Button */}
            <div className='flex justify-between mt-10'>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>{props.eventName}</p>
                <Link to="/"><button className='h-3/4 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button></Link>
            </div>
        </div>
            

    </>
  );
}

export default EventTab;
