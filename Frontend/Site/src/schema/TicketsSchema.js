import * as Yup from 'yup'
const TicketsSchema = Yup.object().shape({
    name:Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),    
    phoneNumber: Yup.string().required('Required').matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits')
})
export default TicketsSchema