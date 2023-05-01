import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters long').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});

export default SignUpSchema;
