import {combineReducers} from "redux";
import {allReducer} from "./allReducer";

export const rootReducer = combineReducers({
    allReducerData: allReducer,
});