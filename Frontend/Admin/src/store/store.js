/**
 * Add reducers here and config the store.
 */

import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducers/auth"
import {collegeReducer} from './reducers/college'

const store = configureStore({
    reducer:{
        auth: authReducer,
        college: collegeReducer
    }
})
export default store