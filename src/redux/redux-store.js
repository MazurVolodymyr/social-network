import { combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer"
import messagesReducer from "./messages-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    messagesPage: messagesReducer ,
    contentPage: contentReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;