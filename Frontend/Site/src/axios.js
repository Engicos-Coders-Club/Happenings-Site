import axios from "axios";


export const productionUrl = "https://backend.happenings2023.com/"

export const developmentUrl = "http://localhost:8000"


axios.defaults.baseURL = developmentUrl

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
