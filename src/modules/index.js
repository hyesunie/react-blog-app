import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import user from "./user";
import posts from "./posts";

const reducer = combineReducers({ user, posts });
const store = createStore(reducer, composeWithDevTools());

export default store;
