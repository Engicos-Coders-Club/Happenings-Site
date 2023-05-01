import * as Yup from 'yup';

const ForgotPassword = Yup.object().shape({  
  email: Yup.string().email('Invalid email').required('Required'),  
});

export default ForgotPassword;
