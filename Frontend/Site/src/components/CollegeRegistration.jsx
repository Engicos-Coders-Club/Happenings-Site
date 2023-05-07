// ! College Registration Page => register/college
import { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { CollegeRegistrationSchema } from '../schema/CollegeRegistrationSchema'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import { registerCollege } from '../actions/college'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'

function CollegeRegistration(props) {
    const { title } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // Check if user is coordinator and if he has registered then navigate to /event-selection

    useEffect(() => {
        document.title = title
    }, [])

    const handleSubmit = (values) => {

        // Send to backend
        //console.log(values)
        const {CSName,GSName,CSphoneNumber,GSphoneNumber,collegeName,payment} = values
        dispatch(registerCollege(collegeName,GSName,GSphoneNumber,CSName,CSphoneNumber,payment))


        toast('Form succesfully submitted! Your application is under review', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        setTimeout(() => {
            navigate("/")
        }, 5000)
    }


    return (
        <div className="mx-auto bg-black min-h-screen text-white bg-events-bg">
            <div className="py-16">
                <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-[300px]">
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3" style={{ 'fontFamily': 'MangoGrotesque' }}>Register College</h1>
                </div>
                <div className="w-[90vw] md:w-[60vw] mx-auto border-orange-700 border-4 mt-10 py-10 border-dotted backdrop-blur-3xl rounded-tl-3xl rounded-br-3xl">
                    <Formik initialValues={{ collegeName: "", GSName: "", GSphoneNumber: "", CSName: "", CSPhoneNumber: "", payment: '' }} validationSchema={CollegeRegistrationSchema} onSubmit={(values) => handleSubmit(values)}>
                        {({ touched, errors, isSubmitting, values }) =>
                            <Form className="flex flex-col gap-y-5 w-3/4 mx-auto py-10">
                                <div className='leading-8 flex flex-col'>
                                    <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>College Name</label>
                                    <Field type="text" name="collegeName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="collegeName"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>General Secretary Name</label>
                                    <Field type="text" name="GSName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="GSName"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Phone Number</label>
                                    <Field type="tel" name="GSphoneNumber" className="border border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="GSphoneNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='text-2xl py-2 tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Cultural Secretary Name</label>
                                    <Field type="text" name="CSName" className="border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="CSName"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Phone Number</label>
                                    <Field type="tel" name="CSphoneNumber" className="border border-red-500 px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="CSphoneNumber"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className='flex flex-col leading-8'>
                                    <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Payment Slip</label>
                                    <Field type="file" name="payment" className="text-white h-9 leading-10 bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                    <ErrorMessage
                                        name="payment"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="mx-auto flex flex-col items-center justify-center">
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" width={200} className="my-4 bg-white"/>
                                     <p className="text-2xl text-center tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Scan the above QR Code to pay inorder to register your college</p>
                                </div>
                                <button className={`border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-red-600 text-2xl tracking-wider flex items-center justify-center`} style={{ 'fontFamily': 'MangoGrotesque' }} type="submit">Register College <FiArrowUpRight size={20} /></button>
                            </Form>
                        }
                    </Formik>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            </div>
        </div >
    )
}

export default CollegeRegistration