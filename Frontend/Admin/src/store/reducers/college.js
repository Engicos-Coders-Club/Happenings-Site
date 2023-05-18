import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const collegeReducer = createReducer(initialState,{
    GetAllCollegesRequest: (state,action)=>{
        state.loading = true;
    },
    GetAllCollegesSuccess: (state,action)=>{
        state.colleges = action.payload;
        state.loading = false
    },
    GetAllCollegesFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GetCollegeParicipantsRequest: (state,action)=>{
        state.loading = true;
    },
    GetCollegeParicipantsSuccess: (state,action)=>{
        state.participants = action.payload;
        state.loading = false
    },
    GetCollegeParicipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GetEventParicipantsRequest: (state,action)=>{
        state.participants = null
        state.loading = true;
    },
    GetEventParicipantsSuccess: (state,action)=>{
        state.participants = action.payload;
        state.loading = false
    },
    GetEventParicipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GetAllEventsRequest: (state,action)=>{
        state.loading = true;
    },
    GetAllEventsSuccess: (state,action)=>{
        state.events = action.payload;
        state.loading = false
    },
    GetAllEventsFailure: (state,action)=>{     
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

