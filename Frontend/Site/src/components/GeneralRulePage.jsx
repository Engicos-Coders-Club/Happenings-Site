import Line from '../assets/Line.png'
import pointTable from '../assets/schedule.svg'
// import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from "react-router-dom";
import Navbar from '../components/navbar'
import SideBar from '../components/SideBar'

function GeneralRuleModal(props) {
    return (
        <>
        <section className='bg-[#171717ff] relative py-12 md:pl-16'>

        <div className="text-white w-3/4 mx-auto pt-5 xs:pt-0">
            <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>GENERAL <span className='text-red-500'>RULES</span></p>
            <ul className='pb-3 text-xs sm:text-sm lg:text-base list-disc tracking-wide' style={{fontFamily: 'Merriweather'}}>

                <li className="pt-1 my-2">Passouts of 2023 can participate in Happenings 2023.</li>
                <li className="pt-1 my-2">Colleges must submit registration entries by filling the form before May 14th, 2023, 11.59 pm.</li>
                <li className="pt-1 my-2">The (Joker) needs to be submitted with the registration form</li>
                <li className="pt-1 my-2">College ID card is mandatory during registration.</li>
                {/* <li className="pt-1 my-2">Each participant can only participate in one event.</li> */}
                <li className="pt-1 my-2">Only single team per college per event is allowed.</li>
                <li className="pt-1 my-2">Vulgarity, obscenity, violence, or rude behavior will lead to disqualification of the entire college team.</li>
                <li className="pt-1 my-2">The organizing team is not responsible for participants in multiple events simultaneously.</li>
                <li>Damage to property or abusive attacks can lead to fine, legal action, and disqualification from the entire event.</li>
                <li className="pt-1 my-2">No TA/DA will be provided, and participants are responsible for their belongings.</li>
                <li className="pt-1 my-2">The decision of judges and organizers will be final and binding, and lateness or exceeding time limit will lead to deduction of points.</li>
                <li className="pt-1 my-2">The participants must report for every event 30 minutes prior to the event as mentioned in the schedule.</li>
            </ul>
        </div>
        <div className='my-8'>
            <img src={Line} width="85%" alt="" className='mx-auto' />
        </div>

        <div className="text-white w-3/4 mx-auto">
            <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>THE <span className='text-red-500'>JOKER</span></p>
            <ul className='pb-3 text-xs sm:text-sm lg:text-base list-decimal tracking-wide' style={{fontFamily: 'Merriweather'}}>
            <li className="pt-1 my-2">In this event we are introducing one Joker and one anti Joker.</li>

            <li className="pt-1 my-2">Joker rules:</li>
                <ul className='pb-3 text-xs sm:text-sm lg:text-base list-disc tracking-wide'>
                    <li className="pt-1 my-2">A Joker is placed by a college on any one event they are participating in.</li>
                    <li className="pt-1 my-2">The Joker is placed on the overall event, and not on a particular place.</li>
                    <li className="pt-1 my-2">If your Joker predictions come true, you get double points of that particular event.</li>
                    <li className="pt-1 my-2">If your joker predictions come false, 500 points are deducted from your total score.</li>
                    <li className="pt-1 my-2">If you fail to submit a Joker, 1000 points are deducted from the total score.</li>
                </ul>
            <li className="pt-1 my-2">Anti joker: </li>   
                <ul className='pb-3 text-xs sm:text-sm lg:text-base list-disc tracking-wide'>
                    <li className="pt-1 my-2">Is placed on opponent teams and a particular position/place (like 1st place, 2nd place or 3rd place).</li>
                    <li className="pt-1 my-2">If the anti joker prediction comes true , 50% points will be deducted of that position  according to the points table , and will be distributed equally to the teams who had made that prediction , this does not affect the additional points gained from the joker , Anti-joker only applied on the original points.</li>
                    <li className="pt-1 my-2">If your anti Joker predictions are false, 500 points are deducted from your total score.</li>
                    <li className="pt-1 my-2">If you fail to submit an anti Joker, 1000 points are deducted from the total score.</li>
                </ul>

            </ul>
        </div>
        <div className='my-8'>
            <img src={Line} width="85%" alt="" className='mx-auto' />
        </div>
        <div className='flex justify-center w-[80%] mx-auto'>
            <div className='bg-point-bg bg-cover w-full py-4 xs:py-8 sm:py-10 md:py-12'>
                <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-center pb-3 xs:pb-6 sm:pb-7 md:pb-9' style={{ 'fontFamily': 'MangoGrotesque' }}>POINT SYSTEM</p>
                <img src={pointTable} width="75%" alt="" className='mx-[17%]' />
            </div>
        </div>
        </section>
        </>
    );
}

export default GeneralRuleModal;


