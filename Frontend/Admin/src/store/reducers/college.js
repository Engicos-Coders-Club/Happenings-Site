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
        state.loadingCollege = true;
    },
    GetCollegeParicipantsSuccess: (state,action)=>{
        state.participants = action.payload;
        state.loadingCollege = false
    },
    GetCollegeParicipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loadingCollege = false
    },

    GetEventParicipantsRequest: (state,action)=>{
        state.participants = null
        state.loadingEvent = true;
    },
    GetEventParicipantsSuccess: (state,action)=>{
        state.participants = action.payload;
        state.loadingEvent = false
    },
    GetEventParicipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loadingEvent = false
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

    MarkAttendanceRequest: (state,action)=>{
        state.loadingAttendance = true;
    },
    MarkAttendanceSuccess: (state,action)=>{
        state.message = action.payload;
        state.loadingAttendance = false
    },
    MarkAttendanceFailure: (state,action)=>{     
          state.error = action.payload
          state.loadingAttendance = false
    },
    
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

