import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from "react-router-dom";

function GeneralRuleModal(props) {
    return (
        <>
        <div className='absolute z-40 w-screen h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
            <div className="bg-[#222222] w-[90vw] h-auto md:w-[60vw] border-orange-700 border-4  py-10 border-dashed backdrop-blur-3xl rounded-tl-3xl rounded-br-3xl">
                <div className="flex  items-start mx-auto w-[90%]">
                    <div className="text-white">
                        <p className='text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2' style={{fontFamily: 'Merriweather'}}>GENERAL RULES</p>
                        <ul className='pb-3 my-10 text-xs sm:text-sm lg:text-base list-disc' style={{fontFamily: 'Merriweather'}}>

                            <li className="pt-1">Passouts of 2023 can participate in Happenings 2023.</li>
                            <li className="pt-1">Colleges must submit registration entries by filling the form before May 14th, 2023, 11.59 pm.</li>
                            <li className="pt-1">The (Joker) needs to be submitted with the registration form</li>
                            <li className="pt-1">College ID card is mandatory during registration.</li>
                            {/* <li className="pt-1">Each participant can only participate in one event.</li> */}
                            <li className="pt-1">Only single team per college per event is allowed.</li>
                            <li className="pt-1">Vulgarity, obscenity, violence, or rude behavior will lead to disqualification of the entire college team.</li>
                            <li className="pt-1">The organizing team is not responsible for participants in multiple events simultaneously.</li>
                            <li>Damage to property or abusive attacks can lead to fine, legal action, and disqualification from the entire event.</li>
                            <li className="pt-1">No TA/DA will be provided, and participants are responsible for their belongings.</li>
                            <li className="pt-1">The decision of judges and organizers will be final and binding, and lateness or exceeding time limit will lead to deduction of points.</li>
                            <li className="pt-1">The participants must report for every event 30 minutes prior to the event as mentioned in the schedule.</li>
                        </ul>
                        <div className='flex justify-center my-12'>
                            {/* <Link to='/'> */}
                            <div className='border-orange-500 rounded-[20px] text-white  w-[25%] h-[10%] border-2 cursor-poMerriweather absolute'>
                                <div className='border-orange-500 rounded-[20px] text-white text-xs sm:text-sm lg:text-base  w-full h-full border-2 flex justify-center items-center cursor-poMerriweather absolute top-[-3px] px-4 md:px-0 uppercase font-BEBAS'>Register Now</div>
                            </div>
                            {/* </Link> */}
                            
                        </div>
                    </div>
                    <div>
                        <AiOutlineClose size={30} onClick={props.toggleRule} color="white" className='cursor-poMerriweather' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default GeneralRuleModal;
