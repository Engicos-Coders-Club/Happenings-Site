import { BsFillNutFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Day1 from '../assets/day-1.webp'
import Day2 from '../assets/day-2.webp'
import { Link } from "react-router-dom";


function ScheduleModal(props) {
    
  return (
    <div className='absolute z-[60] w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
        <div className="w-screen h-fit">
            <div className='flex justify-end'>
                <AiOutlineClose size={30}  color="white" className='cursor-pointer' onClick={props.close}/>
            </div>
            <div className="overflow-x-scroll bg-white">
                <img className="relative z-[1] max-w-[310%]" src={props.img} alt="schedule" width="1000" height="400"/>
          </div>
        </div>
    </div>   
  );
}

export default ScheduleModal;
