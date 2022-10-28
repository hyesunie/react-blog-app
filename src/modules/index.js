import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import user from "./user";

const reducer = combineReducers({ user });
const store = createStore(reducer, composeWithDevTools());

export default store;
