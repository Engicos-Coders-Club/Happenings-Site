import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const categoryReducer = createReducer(initialState,{
    GetCategoriesRequest: (state,action)=>{
        state.loading = true;
    },
    GetCategoriesSuccess: (state,action)=>{
        state.categories = action.payload;
        state.loading = false
    },
    GetCategoriesFailure: (state,action)=>{     
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

