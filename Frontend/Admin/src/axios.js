import axios from "axios";

export const developmentURL = "https://backend.happenings2023.com"

axios.defaults.baseURL = developmentURL

// axios.interceptors.request.use(function (req) {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const { token } = JSON.parse(localStorage.getItem('user'));
//       req.headers.authorization = `Bearer ${token}`;
//       return req;
//     }
//     return req;
// });