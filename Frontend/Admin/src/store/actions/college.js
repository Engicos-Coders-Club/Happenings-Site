import axios from "axios"
import '../../axios'

export const getAllColleges = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetAllCollegesRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get("/api/get-colleges/",{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetAllCollegesSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetAllCollegesFailure",
            payload:error.response.data
        })
    }    
}
export const getEventParticipants = (event_id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetEventParicipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/get-participants-by-event/${event_id}/`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetEventParicipantsSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetEventParicipantsFailure",
            payload:error.response.data
        })
    }    
}
export const getEventParticipantsByCollege = (event_id,college_id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetEventParicipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/get-participants-by-event/${event_id}/?college=${college_id}`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetEventParicipantsSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetEventParicipantsFailure",
            payload:error.response.data
        })
    }    
}

export const getAllCollegeParticipants = (college_id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetCollegeParicipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/get-participants-by-college/${college_id}/`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetCollegeParicipantsSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetCollegeParicipantsFailure",
            payload:error.response.data
        })
    }    
}

export const getDay1CollegeParticipants = (college_id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetCollegeParicipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/get-participants-by-college/${college_id}/?day=1`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetCollegeParicipantsSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetCollegeParicipantsFailure",
            payload:error.response.data
        })
    }    
}
export const getDay2CollegeParticipants = (college_id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetCollegeParicipantsRequest"
        })

        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }

        const {data} = await axios.get(`/api/get-participants-by-college/${college_id}/?day=2`,{headers:{'Authorization':tokens}})
        dispatch({
            type:"GetCollegeParicipantsSuccess",
            payload: data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetCollegeParicipantsFailure",
            payload:error.response.data
        })
    }    
}
export const getAllEvents = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetAllEventsRequest"
        })
        const {data} = await axios.get(`/api/events-by-category/`)
        dispatch({
            type:"GetAllEventsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetAllEventsFailure",
            payload:error.response.data
        })
    }    
}
export const markAttendance = (id) => async(dispatch)=>{
    try {
        dispatch({
            type:"MarkAttendanceRequest"
        })
        const user = localStorage.getItem('user');
        let tokens = ''
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            tokens = `Bearer ${token}`;
        }
        const {data} = await axios.post(`/api/participant-attendence/${id}/`,{},{
            headers:{
                'Authorization':tokens
            }
        })
        dispatch({
            type:"MarkAttendanceSuccess",
            payload:data.message
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"MarkAttendanceFailure",
            payload:error.response.data
        })
    }    
}
