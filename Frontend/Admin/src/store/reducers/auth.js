import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated:false
}

export const authReducer = createReducer(initialState,{
    LoginRequest: (state,action)=>{
        state.loading = true;
    },
    LoginSuccess: (state,action)=>{
        state.message = action.payload;
        state.isAuthenticated = true
        state.loading = false
    },
    LoginFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    LogoutRequest: (state,action)=>{
        state.loading = true;
    },
    LogoutSuccess: (state,action)=>{
        state.message = null;
        state.isAuthenticated = false
        state.loading = false
    },

    SignUpRequest: (state,action)=>{
        state.loading = true;
    },
    SignUpSuccess: (state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
    SignUpFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    LoadUserRequest: (state,action)=>{
        state.loading = true;
    },
    LoadUserSuccess: (state,action)=>{
        state.isAuthenticated = true
        state.loading = false
    },
    LoadUserFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GoogleLoginRequest: (state,action)=>{
        state.loading = true
    },
    GoogleLoginSuccess: (state,action)=>{
        state.profile = action.payload
        state.isAuthenticated = true
        state.loading = false  
    },
    GoogleLoginFailure: (state,action)=>{
        state.error = action.payload
        state.isAuthenticated = false
        state.loading = false  
    },

    ForgotPassRequest: (state,action)=>{
        state.mail_loading = true;
    },
    ForgotPassSuccess: (state,action)=>{
        state.message = action.payload
        state.error = null
        state.mail_loading = false
    },
    ForgotPassFailure: (state,action)=>{
        state.error = action.payload
        state.mail_loading = false; 
    },

    ChangePassRequest: (state,action)=>{
        state.mail_loading = true;
    },
    ChangePassSuccess: (state,action)=>{
        state.message = action.payload
        state.error = null
        state.mail_loading = false
    },
    ChangePassFailure: (state,action)=>{
        state.error = action.payload
        state.mail_loading = false;     
    },
    
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

