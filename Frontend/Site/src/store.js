import { configureStore } from "@reduxjs/toolkit"
import { categoryReducer } from "./reducers/categories"
import { eventsReducer} from './reducers/events'
import { authReducer } from "./reducers/auth"
import { collegeReducer } from "./reducers/college"

const store = configureStore({
    reducer:{
        auth:authReducer,
        category:categoryReducer,
        event:eventsReducer,
        college:collegeReducer
    }
})
export default store