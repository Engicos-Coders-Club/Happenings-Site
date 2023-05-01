// ! College Registration Page => register/college
import { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CollegeRegistrationSchema } from '../schema/CollegeRegistrationSchema'
import { ErrorMessage, Field, Form, Formik } from 'formik'


// TODO: Disable Register College Button till Payment is Done 


function CollegeRegistration(props) {
    const { title } = props

    useEffect(() => {
        document.title = title
    }, [])

    const [paymentDone, setPaymentDone] = useState(false)

    const handleSubmit = (values) => {
        // Send to backend
        console.log(values)
    }


    return (
        <div className="mx-auto bg-black min-h-screen text-white bg-events-bg">
            <div className="py-16">
                <div className="border-l-2 border-r-2 border-t-2 border-red-300 mx-auto w-[300px]">
                    <h1 className="uppercase text-red-600 text-center font-extrabold text-6xl pt-3" style={{ 'fontFamily': 'MangoGrotesque' }}>Register College</h1>
                </div>
                <div className="w-[90vw] md:w-[60vw] mx-auto border-orange-700 border-4 mt-10 py-10 border-dotted backdrop-blur-3xl rounded-tl-3xl rounded-br-3xl">
                    <Formik initialValues={{ collegeName: "", GSName: "", GSphoneNumber: "", CSName: "", CSPhoneNumber: "" }} validationSchema={CollegeRegistrationSchema} onSubmit={(values) => handleSubmit(values)}>
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
                                <button className="border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-red-600 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }} type="submit"><Link to="/pay" className='flex justify-center items-center'>Pay Now</Link></button>
                                <button className={`border-red-500 border w-fit rounded-xl p-3 mx-auto text-white py-1 bg-black hover:scale-125 hover:bg-red-600 text-2xl tracking-wider ${!paymentDone ? 'cursor-not-allowed' : 'cursor-pointer'}`} style={{ 'fontFamily': 'MangoGrotesque' }} type="submit" ><Link to="/event-selection" className={`flex justify-center items-center ${!paymentDone ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Register College <FiArrowUpRight size={20} /></Link></button>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default CollegeRegistration