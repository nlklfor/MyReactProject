import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogReducer,
})

let store = createStore(reducers);

export default store;
