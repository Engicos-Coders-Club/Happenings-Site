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

    GetEventRequest: (state,action)=>{
        state.loading = true;
    },
    GetEventSuccess: (state,action)=>{
        state.event = action.payload;
        state.loading = false
    },
    GetEventFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GetAllEventsRequest: (state,action)=>{
        state.loading = true;
    },
    GetAllEventsSuccess: (state,action)=>{
        state.all_events = action.payload;
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

