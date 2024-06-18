import Profile_reducer from "./Prof-red";
import Dialog_reducer from "./Dial-red";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers( {
    Profile: Profile_reducer,
    Dialog: Dialog_reducer,
})
const store = createStore(reducers)
 
export default store