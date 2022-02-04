import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {users} from "./users";

export const state = createStore(combineReducers({
    users,
}), composeWithDevTools(applyMiddleware(thunk)));


