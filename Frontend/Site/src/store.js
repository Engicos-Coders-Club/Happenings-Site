import { configureStore } from "@reduxjs/toolkit"
import { categoryReducer } from "./reducers/categories"
import { eventsReducer} from './reducers/events'
import { authReducer } from "./reducers/auth"

const store = configureStore({
    reducer:{
        auth:authReducer,
        category:categoryReducer,
        event:eventsReducer
    }
})
export default store