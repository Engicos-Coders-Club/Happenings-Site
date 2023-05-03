import axios from "axios"
import '../axios'

export const getCategories = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetCategoriesRequest"
        })
        const {data} = await axios.get(`api/all-categories/`)
        dispatch({
            type:"GetCategoriesSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetCategoriesFailure",
            payload:error.response.data
        })
    }    
}