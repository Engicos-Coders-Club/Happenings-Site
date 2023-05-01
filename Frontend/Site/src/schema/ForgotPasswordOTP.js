// once otp send
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    otp: Yup.string().required('OTP is required').matches(/^[0-9]+$/, 'OTP must be a number'),
    password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters long').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});

export default SignUpSchema;
