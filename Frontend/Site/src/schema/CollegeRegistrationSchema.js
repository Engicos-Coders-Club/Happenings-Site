import * as Yup from "yup";

export const CollegeRegistrationSchema = Yup.object().shape({
    collegeName: Yup.string().required("Required"),
    GSName:Yup.string().required("Required"),
    GSphoneNumber: Yup.string().required("Required"),
    CSName:Yup.string().required("Required"),
    CSphoneNumber: Yup.string().required("Required"),
    //payment:Yup.mixed().required("Please upload your payment slip here")
})