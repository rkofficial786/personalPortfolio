import { combineReducers } from "@reduxjs/toolkit";

import darkModeSlice from "./darkSlice"

const rootReducer =combineReducers({

darkmode:darkModeSlice,
})

export default rootReducer