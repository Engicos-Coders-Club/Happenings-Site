/**
 * Add reducers here and config the store.
 */

import {configureStore} from "@reduxjs/toolkit"
import { homeReducer } from "./reducers/home"

const store = configureStore({
    reducer:{
        home: homeReducer
    }
})
export default store