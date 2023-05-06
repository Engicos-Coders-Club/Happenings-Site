import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const participantReducer = createReducer(initialState,{
    CollegeRegisterationRequest: (state,action)=>{
        state.loading = true;
    },
    CollegeRegisterationSuccess: (state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
    CollegeRegisterationFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

