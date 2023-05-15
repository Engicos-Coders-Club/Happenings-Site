import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ForgotPassword from "../schema/ForgotPassword";
import ForgotPasswordOTP from "../schema/ForgotPasswordOTP";
import { forgot,reset } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer, toast } from "react-toastify";

// pass email from auth pg (keep a check here, if empty let the user type it)
// disable send otp button if email not correct

function Auth(props) {
    const { title } = props;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [email,setEmail] = useState(null)

    const [firstLoad,setFirstLoad] = useState(true)
    const {mail_loading,message,error} = useSelector((state)=>state.auth)

    useEffect(() => {
        document.title = title || "Forgot Password"
        dispatch({ type: "clearError" });
        setFirstLoad(false)
    }, [])

    useEffect(()=>{
        if(error && !firstLoad){
            toast.error(`${error?.message}`, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }
        if(message){
            dispatch({ type: "clearError" });
            toast.success(`${message}`, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              dispatch({ type: "clearMessage" });
        }
    },[message,error])

    const switchMode = async() => {
        dispatch(forgot(email))
        setIsOTPSent(true);
        //dispatch({ type: "clearError" });
      };

      const handleResetPassword = () => {
        // backend funct call
      };
      
    const handleSubmit = (values) => {        
        const {otp,password} = values
        dispatch(reset(otp,password))   
    }    

    if (mail_loading)
        return <>
            <div
                style={{
                    height: "100vh",
                    width: "100wh",
                    backgroundColor: "black",
                    display: "grid",
                    placeItems: "center",
                }}
                >
                <SpinnerRoundOutlined
                    size={80}
                    thickness={50}
                    speed={100}
                    color="rgba(172, 57, 59, 1)"
                />
                </div>
        </>
    else
    return (
        <div className="text-white min-h-screen">
            <div className="text-white pb-20">
                <div className="w-11/12 md:w-[60vw] mx-auto pt-8">                    
                    <div className='mx-auto mt-8'>                        
                        <Formik initialValues={{ }} validationSchema={isOTPSent? ForgotPasswordOTP : ForgotPassword} onSubmit={(values)=>handleSubmit(values)}>
                        {({ touched, errors, isSubmitting, values }) => (
                                <Form className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-3 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg" >
                                    <h3 className='uppercase text-3xl md:text-5xl text-center text-orange-600' style={{ 'fontFamily': 'MangoGrotesque' }}>FORGOT PASSWORD</h3>                                    
                                    {(!isOTPSent || error) && (<div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Enter Email</label>
                                        <Field type="email" name="email" onChange={(e)=>setEmail(e.target.value)} className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="email"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div> )}
                                    {(isOTPSent && !error) && (
                                    <div className='flex flex-col leading-8 mx-auto w-11/12 md:w-3/5 mt-2'>
                                        <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Enter OTP (Check Email)</label>
                                        <Field type="otp" name="otp" className="border border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="otp"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>)}
                                    {(isOTPSent && !error) && (<div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Password</label>
                                        <Field type="password" name="password" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="password"
                                            className="text-red-500 text-sm mt-2"
                                        /> 
                                    </div> )}
                                    {(isOTPSent && !error) && (
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

                                    {(!isOTPSent || error) && <button type="submit" onClick={switchMode} className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Send OTP</span></button>}
                                    {(isOTPSent && !error) && <button type="submit" onClick={handleResetPassword} className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Reset Password</span></button>}
                                </Form>
                        )}
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
            </div>
        </div>
    )
}

export default Auth