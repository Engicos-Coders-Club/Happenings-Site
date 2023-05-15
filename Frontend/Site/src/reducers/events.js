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
        state.eventLoading = true;
    },
    GetEventSuccess: (state,action)=>{
        state.event = action.payload;
        state.eventLoading = false
    },
    GetEventFailure: (state,action)=>{     
          state.error = action.payload
          state.eventLoading = false
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

    GetDay1EventsRequest: (state,action)=>{
        state.loading = true;
    },
    GetDay1EventsSuccess: (state,action)=>{
        state.day1_events = action.payload;
        state.loading = false
    },
    GetDay1EventsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    GetDay2EventsRequest: (state,action)=>{
        state.loading = true;
    },
    GetDay2EventsSuccess: (state,action)=>{
        state.day2_events = action.payload;
        state.loading = false
    },
    GetDay2EventsFailure: (state,action)=>{     
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

