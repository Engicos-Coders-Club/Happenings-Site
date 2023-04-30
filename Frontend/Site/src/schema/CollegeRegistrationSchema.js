import * as Yup from "yup";

export const CollegeRegistrationSchema = Yup.object().shape({
    collegeName: Yup.string().required("Required"),
    GSName:Yup.string().required("Required"),
    GSphoneNumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    CSName:Yup.string().required("Required"),
    CSphoneNumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
})