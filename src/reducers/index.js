import { combineReducers } from "redux"; //to combine different reducers for different actions
import basketReducer from "./basketReducer";

export default combineReducers({
    basketState: basketReducer //basketState will be one, and each time + 1
    //now let's bring the state to our Navbar component
});