import axios from "axios"
import '../axios'

export const getEvents = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetEventsRequest"
        })
        const {data} = await axios.get(`/api/all-events/?category=${id}`)
        dispatch({
            type:"GetEventsSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetEventsFailure",
            payload:error.response.data
        })
    }    
}

export const getSingleEvent = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetEventRequest"
        })
        const {data} = await axios.get(`/api/event/${id}`)
        dispatch({
            type:"GetEventSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetEventFailure",
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