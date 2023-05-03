import { configureStore } from "@reduxjs/toolkit"
import { categoryReducer } from "./reducers/categories"
import { eventsReducer} from './reducers/events'

const store = configureStore({
    reducer:{
        category:categoryReducer,
        event:eventsReducer
    }
})
export default store