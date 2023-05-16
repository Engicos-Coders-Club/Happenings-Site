import * as Yup from "yup";

export const CollegeRegistrationSchema = Yup.object().shape({
    collegeName: Yup.string().required("Required"),
    GSName:Yup.string().required("Required"),
    GSphoneNumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits"),
    CSName:Yup.string().required("Required"),
    CSphoneNumber: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits"),
    //payment:Yup.mixed().required("Please upload your payment slip here")
})