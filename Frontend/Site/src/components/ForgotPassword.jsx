import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ForgotPassword from "../schema/ForgotPassword";
import ForgotPasswordOTP from "../schema/ForgotPasswordOTP";

// pass email from auth pg (keep a check here, if empty let the user type it)
// disable send otp button if email not correct

function Auth(props) {
    const { title } = props;
    const navigate = useNavigate()
    const [isOTPSent, setIsOTPSent] = useState(false);

    useEffect(() => {
        document.title = title || "Forgot Password"
    }, [])

    const switchMode = () => {
        setIsOTPSent((previsOTPvalidated) => !previsOTPvalidated);
      };

      const handleResetPassword = () => {
        // backend funct call
      };
      
    const handleSubmit = (values) => {        
        console.log(values)        
    }    

    return (
        <div className="bg-login-bg text-white min-h-screen">
            <div className="text-white pb-20">
                <div className="w-11/12 md:w-[60vw] mx-auto pt-8">                    
                    <div className='mx-auto mt-8'>                        
                        <Formik initialValues={{ }} validationSchema={isOTPSent? ForgotPasswordOTP : ForgotPassword} onSubmit={(values) => handleSubmit(values)}>
                        {({ touched, errors, isSubmitting, values }) => (
                                <Form className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-3 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
                                    <h3 className='uppercase text-3xl md:text-5xl text-center text-orange-600' style={{ 'fontFamily': 'MangoGrotesque' }}>FORGOT PASSWORD</h3>                                    
                                    {!isOTPSent && (<div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Enter Email</label>
                                        <Field type="email" name="email" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="email"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div> )}
                                    {isOTPSent && (
                                    <div className='flex flex-col leading-8 mx-auto w-11/12 md:w-3/5 mt-2'>
                                        <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Enter OTP (Check Email)</label>
                                        <Field type="otp" name="otp" className="border border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="otp"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>)}
                                    {isOTPSent && (<div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Password</label>
                                        <Field type="password" name="password" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="password"
                                            className="text-red-500 text-sm mt-2"
                                        /> 
                                    </div> )}
                                    {isOTPSent && (
                                    <div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Confirm Password</label>
                                        <Field type="password" name="confirmpassword" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="confirmpassword"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>
                                    )}

                                    {!isOTPSent && <button type="submit" onClick={switchMode} className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Send OTP</span></button>}
                                    {isOTPSent && <button type="submit" onClick={handleResetPassword} className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Reset Password</span></button>}
                                </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth