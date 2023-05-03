import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const eventsReducer = createReducer(initialState,{
    GetEventsRequest: (state,action)=>{
        state.loading = true;
    },
    GetEventsSuccess: (state,action)=>{
        state.events = action.payload;
        state.loading = false
    },
    GetEventsFailure: (state,action)=>{     
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

