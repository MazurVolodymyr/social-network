import { combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer"
import messagesReducer from "./messages-reducer"


let reducers = combineReducers({
    messagesPage: messagesReducer ,
    contentPage: contentReducer
})

let store = createStore(reducers);

export default store;