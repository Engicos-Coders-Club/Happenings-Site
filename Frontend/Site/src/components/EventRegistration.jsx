// ! Event Registration Page => register/event
import { useState, useEffect } from 'react'
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { EventRegistrationSchema } from '../schema/EventRegistrationSchema'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { logout } from '../actions/auth'
import { registerEvent,editParticipant } from '../actions/college'
import { useDispatch } from 'react-redux'

/*
TODO: 
1. Validation
2. Change Logout Logo
 */

function EventRegistration(props) {
    const { title } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [photo,setPhoto] = useState(null)
    const {event_id,applied,participant} = location.state

    useEffect(() => {
        document.title = title
    }, [])

    const goBack = () => {
        navigate("/event-selection")
    }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

    const handleSubmit = (values) => {
        //console.log(values)
        const {name,phoneNumber} = values
        if(!participant){
            dispatch(registerEvent(event_id,name,phoneNumber,photo))
        }
            
        else
            dispatch(editParticipant(participant.id,name,phoneNumber,photo));
        navigate('/event-selection')
    }
    return (
        <div className="mx-auto bg-black text-white bg-events-bg">
            <div className="py-8">
                <div className="flex justify-between w-4/5 mx-auto">
                    <div className="flex items-center">
                        <FiArrowLeft size={40} onClick={goBack} className="cursor-pointer border-red-600 border p-2 hover:bg-red-600 hover:border-none hover:scale-125" />
                        <p className="px-3 md:px-5 text-xl md:text-3xl" style={{ 'fontFamily': "Mangogrotesque" }}>Back to Events</p>
                    </div>
                    <div className="flex items-center">
                        <FiArrowRight size={40} onClick={handleLogout} className="cursor-pointer border-red-600 border p-2 hover:bg-red-600 hover:border-none hover:scale-125" />
                        <p className="px-3 md:px-5 text-xl md:text-3xl" style={{ 'fontFamily': "Mangogrotesque" }}>Logout</p>
                    </div>
                </div>

                <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-11/12 md:w-[350px] mt-4">
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3" style={{ 'fontFamily': 'MangoGrotesque' }}>Event Registration</h1>
                </div>
                <div className="w-[90vw] md:w-[60vw] mx-auto border-orange-700 border-4 mt-10 py-10 border-dotted backdrop-blur-3xl  rounded-tl-3xl rounded-br-3xl">
                    <Formik initialValues={{ name: `${participant?participant.name:''}`, phoneNumber: `${participant?participant.phone:''}`,photo:`${participant?participant.photo:''}`}} validationSchema={EventRegistrationSchema} onSubmit={(values) => handleSubmit(values)}>
                        {({ touched, errors, isSubmitting, values }) =>
                            <Form className="flex flex-col gap-y-5 w-3/4 mx-auto my-10">
                                <div className='leading-8 flex flex-col'>
                                    <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Name</label>
                                    <Field type="text" name="name" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Phone Number</label>
                                    <Field type="tel" name="phoneNumber" className="border border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="phoneNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>ID Card Photo/ ID Proof</label>
                                    {/* <Field type="file" name="photo" /> */}
                                    {
                                        !participant
                                        ?<input type="file" name='photo' accept="image/*" required onChange={(e)=>setPhoto(e.target.files[0])} />
                                        : <input type="file" name='photo' accept="image/*" onChange={(e)=>setPhoto(e.target.files[0])} />
                                    }
                                    
                                    {/* <ErrorMessage
                                        name="photo"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    /> */}
                                </div>
                                {applied ? 
                                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-red-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Update Participant<FiArrowUpRight size={20} /></button>
                                :<button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-red-600 text-2xl tracking-wider flex items-center justify-center" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Register Participant<FiArrowUpRight size={20} /></button>
                                }
                                
                                
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default EventRegistration;
