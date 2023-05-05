import axios from "axios";


export const productionUrl = "http://35.171.19.185"

export const developmentUrl = "http://localhost:8000"


axios.defaults.baseURL = productionUrl

// axios.interceptors.request.use(function (req) {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const { token } = JSON.parse(localStorage.getItem('user'));
//       req.headers.authorization = `Bearer ${token}`;
//       return req;
//     }
//     req.headers.authorization = null
//     return req;
// });
