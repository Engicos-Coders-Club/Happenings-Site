import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('required'),
  password: Yup.string().required('required'),
});

export default SignInSchema;
