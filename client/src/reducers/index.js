import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionReducer from './questions.js'
import usersReducer from "./users.js";

export default combineReducers({
    authReducer,currentUserReducer,questionReducer,usersReducer
})