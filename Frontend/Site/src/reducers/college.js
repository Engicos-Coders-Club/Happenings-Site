import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    is_Coordinator:false,
    is_Paid:false
}

export const collegeReducer = createReducer(initialState,{
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

    CheckCoordinatorRequest: (state,action)=>{
        state.loading = true;
    },
    CheckCoordinatorSuccess: (state,action)=>{
        state.is_Coordinator = action.payload1
        state.is_Paid = action.payload2
        state.loading = false
    },
    CheckCoordinatorFailure: (state,action)=>{     
          state.error = action.payload
          state.is_Coordinator = false
          state.loading = false
    },

    ViewParticipantsRequest: (state,action)=>{
        state.loading = true;
    },
    ViewParticipantsSuccess: (state,action)=>{
        state.events = action.payload;
        state.loading = false
    },
    ViewParticipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    ViewEventParticipantsRequest: (state,action)=>{
        state.loading = true;
    },
    ViewEventParticipantsSuccess: (state,action)=>{
        state.participants = action.payload;
        state.loading = false
    },
    ViewEventParticipantsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    ViewEventCoordinatorsRequest: (state,action)=>{
        state.loading = true;
    },
    ViewEventCoordinatorsSuccess: (state,action)=>{
        state.coordinators = action.payload;
        state.loading = false
    },
    ViewEventCoordinatorsFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },    

    AddParticipantRequest: (state,action)=>{
        state.loading = true;
    },
    AddParticipantSuccess: (state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
    AddParticipantFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    UpdateParticipantRequest: (state,action)=>{
        state.loading = true;
    },
    UpdateParticipantSuccess: (state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
    UpdateParticipantFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    RemoveParticipantRequest: (state,action)=>{
        state.loading = true;
    },
    RemoveParticipantSuccess: (state,action)=>{
        state.message = action.payload;
        state.loading = false
    },
    RemoveParticipantFailure: (state,action)=>{     
          state.error = action.payload
          state.loading = false
    },

    clearCoordinator:(state,action)=>{
        state.is_Coordinator = false
    },
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

