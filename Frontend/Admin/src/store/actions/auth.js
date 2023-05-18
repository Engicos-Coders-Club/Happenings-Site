import axios from "axios"
import '../../axios'


export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post("/api/login/",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"LoginSuccess",
            payload:data.message
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoginFailure",
            payload:error.response.data
        })
    }    
}
export const register = (name, email, password,phone) => async (dispatch) => {
    try {
        dispatch({
            type: "SignUpRequest",
        });

        const { data } = await axios.post("/api/signup/",{name,email,phone,password},{
            headers: { "Content-Type": "application/json" },
            }
        );

        dispatch({
            type: "SignUpSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SignUpFailure",
        payload: error.response.data,
      });
    }
  };
export const googleLogin = (tokenId,profile)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GoogleLoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post(`/api/google-auth/`,{token_id:tokenId},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"GoogleLoginSuccess",
            payload:profile
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GoogleLoginFailure",
            payload:error.response.data
        })
    }    
}
export const loadUser = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoadUserRequest"
        })

       
        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        await axios.get("/api/verify-jwt/",{headers:{'Authorization':tokens}})
        dispatch({
            type:"LoadUserSuccess",
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.detail
        })
    }    
}
export const logout = ()=>async(dispatch)=>{
    dispatch({
        type:"LogoutRequest"
    })
    localStorage.removeItem("user");
    dispatch({
        type:"LogoutSuccess",
        payload:"Logout Successfull"
    }) 
}