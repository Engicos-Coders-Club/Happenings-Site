import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from "react-router-dom";

function GeneralRuleModal(props) {
    return (
        <>
        <div className='absolute z-40 w-screen h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
            <div className="bg-[#222222] w-[90vw] h-auto md:w-[60vw] border-orange-700 border-4  py-10 border-dashed backdrop-blur-3xl rounded-tl-3xl rounded-br-3xl">
                <div className="flex  items-start mx-auto w-[90%]">
                    <div className="text-white">
                        <p className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4'>GENERAL RULES</p>
                        <ul className='px-3 my-10 text-xs sm:text-sm lg:text-base'>
                            <li>Each performance should be an original rap verse and should not exceed 5 mins.</li>
                            <li>participants should have their own beat to rap to</li>
                            <li>The participants need to bring their own track and handover the pendrive to the registration counter.</li>
                            <li>The decisions made by the organisers and judges will be final and abiding.</li>
                            <li>The participant must not employ any explicit words in his/her lyrics.</li>
                            <li>Usage of offensive language, slurs, naming a particular person or a defined group of people (religions, Caste etc), any socially objectionable language, is strictly prohibited. Non compliance os these rules is grounds for disqualification.</li>
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
