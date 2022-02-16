import { combineReducers } from "redux";
import itemReducer from './itemReducer'


export default combineReducers({
    item: itemReducer
    // You add also 
    // auth: authReducer
    // and so on
})

 