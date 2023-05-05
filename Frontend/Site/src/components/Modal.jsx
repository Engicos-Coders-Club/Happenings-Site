import Frame from '../assets/Frame.png'
import Avatar from '../assets/Avatar.png'
import { FiX } from 'react-icons/fi'
import { getSingleEvent } from '../actions/events'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Modal({event_id,setShowEventModal}) {
    const dispatch = useDispatch()
    const {event,loading} = useSelector((state)=>state.event)

    useEffect(()=>{
        dispatch(getSingleEvent(event_id))
    },[])

    const closeModal = () =>{
        setShowEventModal(false)
    }
    if(loading || !event)
    return( 
        <div>Loading</div>
    )
    else
    return (
        <div className="absolute left-0 top-0 z-50 bg-[rgba(0,0,0,0.5)] w-full h-auto flex items-center justify-center">
        <div className=" bg-white h-[90%] rounded-lg my-8 w-[78%] sm:w-[68%] md:w-[62%] lg:w-[50%]" > 
        {/* bg-modal-bg bg-cover */}

            <div className='flex justify-between items-center px-10 my-5'>
                <p className='text-lg sm:text-xl md:text-2xl'>Events Details</p>
                <button onClick={closeModal} className='flex border-2 border-dashed border-black py-[1.3%] px-[2.4%] text-base sm:text-lg md:text-xl'>Close<FiX className='m-[0.4rem]'/></button>
            </div>
            
            <div className='px-10 my-5'>
                <hr className='border-black my-1'/><hr className='border-black my-1' />
                <p className='text-center my-2 text-lg sm:text-2xl md:text-3xl'><span className='font-extrabold'>{event?.event_name}</span></p>
                <hr className='border-black my-1' /><hr className='border-black my-1' />
            </div>
            
            {/* Display this for Screen Greater than 1024px */}
            <div>
                <div className='px-10 my-5 text-base flex flex-col-reverse md:flex-row' style={{'grid-template-columns':'60% 36%', 'gap':'4%'}}>
                    <div>
                        <p className='my-2 md:my-0'>{event?.description}</p>
                        {/* <p className='border-2 border-black p-2 my-2 md:my-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam eaque voluptas perferendis consequatur rem laboriosam. Temporibus, iusto id. Quidem nemo natus corporis.</p> */}
                    </div>
                    <img src={Frame} width="85%" alt=""  className='my-2 md:my-0 mx-auto'/>
                </div>
            </div>

            {/* Display this for Screen less than 1024px */}
            {/* <div className='lg:hidden px-10 my-5 text-[9px]  sm:text-xs md:text-sm lg:text-base'>
                <div style={{'display':'grid','grid-template-columns':'60% 36%', 'gap':'4%'}}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam eaque voluptas perferendis consequatur rem laboriosam. Temporibus, iusto id. Quidem nemo natus corporis.</p>
                    <img src={Frame} alt="" />
                </div>
                <p className='border-2 border-black p-2 my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam eaque voluptas perferendis consequatur rem laboriosam. Temporibus, iusto id. Quidem nemo natus corporis.</p>
            </div> */}

            <div className='px-10 my-5'>
                <hr className='border-black my-1'/>
                <div className='flex justify-between my-3 text-lg sm:text-xl md:text-2xl' >
                <p className='font-extrabold'>RULES</p>
                <p>THEME: OPEN</p>
                </div>
                <hr className='border-black my-1' />
            </div>
            
            <div className='px-10 my-5 text-[9px]  sm:text-xs md:text-sm lg:text-base list-disc'>
                <p className='my-2 md:my-0'>{event?.rules}</p>
                {/* <ul>
                    <li>Each performance should be an original rap verse and should not exceed 5 mins.</li>
                    <li>participants should have their own beat to rap to</li>
                    <li>The participants need to bring their own track and handover the pendrive to the registration counter. </li>
                    <li>The decisions made by the organisers and judges will be final and abiding.</li>
                    <li>The participant must not employ any explicit words in his/her lyrics.</li>
                    <li>Usage of offensive language, slurs, naming a particular person or a defined group of people (religions, Caste etc), any socially objectionable language, is strictly prohibited. Non compliance os these rules is grounds for disqualification.</li>
                    <li>Obscenity, at the discretion of judges is not allowed and may lead to disqualification.</li>
                    <li>The rap can be in any language</li>                   
                </ul> */}
            </div>

            <div className='px-10 my-5'>
                <hr className='border-black my-1'/>
                <p className='my-3 font-extrabold text-lg sm:text-xl md:text-2xl'>JUDGING CRITERIA</p>
                <hr className='border-black my-1' />
                <p className='my-2 md:my-0'>{event?.judging_criteria}</p>
            </div>

            {/* <div className='px-10 my-5 text-[9px]  sm:text-xs md:text-sm lg:text-base'>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>             
                </ul>
            </div> */}

            <div className='px-10 my-5'>
                <hr className='border-black my-1'/>
                <p className='my-3 font-extrabold text-lg sm:text-xl md:text-2xl'>TIMING</p>
                <hr className='border-black my-1' />
                <p className='my-2 md:my-0'>{event?.timing}</p>
            </div>

            <div className='px-10 my-5'>
                <hr className='border-black my-1'/>
                <p className='my-3 font-extrabold text-lg sm:text-xl md:text-2xl'>VENUE</p>
                <hr className='border-black my-1' />
                <p className='my-2 md:my-0'>{event?.venue}</p>
            </div>

            <div className='px-10 my-5'>
                <hr className='border-black my-1'/>
                <p className='my-3 font-extrabold text-lg sm:text-xl md:text-2xl'>NO OF PARTICIPANTS</p>
                <hr className='border-black my-1' />
                <p className='my-2 md:my-0'>{event?.no_of_participants}</p>
            </div>

            <div className='mx-10 my-6 px-4 border-2 border-black'>
                <p className='font-extrabold my-2 text-lg sm:text-xl md:text-2xl'>COORDINATORS</p>
                <div className='my-2' style={{'display':'grid','grid-template-columns':'8% 92%', 'gap':'3%'}}>
                    <img src={Avatar}  alt="" />
                    <div>
                        <p>Karan Ghivari</p>
                        <p>wa.link/11</p>
                    </div>
                </div>
                <div className='my-2' style={{'display':'grid','grid-template-columns':'8% 92%', 'gap':'3%'}}>
                    <img src={Avatar}  alt="" />
                    <div>
                        <p>Karan Ghivari</p>
                        <p>wa.link/11</p>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  );
}

export default Modal;
