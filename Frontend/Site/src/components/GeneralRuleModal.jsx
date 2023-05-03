import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from "react-router-dom";

function GeneralRuleModal(props) {
    return (
        <>
        <div className='absolute z-40 w-screen h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
            <div className="bg-[#222222] w-[90vw] h-auto md:w-[60vw] border-orange-700 border-4  py-10 border-dashed backdrop-blur-3xl rounded-tl-3xl rounded-br-3xl">
                <div className="flex  items-start mx-auto w-[90%]">
                    <div className="text-white">
                        <p className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2'>GENERAL RULES</p>
                        <ul className='pb-3 my-10 text-xs sm:text-sm lg:text-base'>

                            <li>Passouts of 2023, are allowed to participate for Happenings 2023.</li>
                            <li>Colleges are requested to send their registration entries on or before 14th  May 2023, 11.59 pm by filling the registration form.</li>
                            <li>The (Joker) needs to be submitted along with the registration form</li>
                            <li>College ID card is mandatory at the time of registration.</li>
                            <li>No multiple entries, one participant per event</li>
                            <li>Any vulgarity or obscenity (ON/OFF Stage), display of violence or rude behaviour will lead to disqualification of the entire college team.</li>
                            <li>The organising team will not be responsible if any participant is in multiple events which are going on simultaneously. There will be no negotiation and rescheduling of competitions.</li>
                            <li>Damage to any property or abusive attacks on other participating teams shall not be tolerated and can lead to fine, legal action and disqualification from the entire event.</li>
                            <li>No TA/DA will be provided. </li>
                            <li>Participants are solely responsible for their property/belongings. </li>
                            <li>The decision of the judges and organisers in any competition will be final and binding and will not be contestable.</li>
                            <li>If the participants are late for any competition, points will be deducted.</li>
                            <li>Exceeding the said time limit for any event will lead to deduction of points.</li>
                            <li>The participants must report for every event 30 minutes prior to the event as mentioned in the schedule.</li>
                        </ul>
                        <div className='flex justify-center my-12'>
                            {/* <Link to='/'> */}
                            <div className='border-orange-500 rounded-[20px] text-white  w-[25%] h-[10%] border-2 cursor-pointer absolute'>
                                <div className='border-orange-500 rounded-[20px] text-white text-xs sm:text-sm lg:text-base  w-full h-full border-2 flex justify-center items-center cursor-pointer absolute top-[-3px] px-4 md:px-0 uppercase font-BEBAS'>Register Now</div>
                            </div>
                            {/* </Link> */}
                            
                        </div>
                    </div>
                    <div>
                        <AiOutlineClose size={30} onClick={props.toggleRule} color="white" className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default GeneralRuleModal;
