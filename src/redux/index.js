import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./reducers";
import thunk from "redux-thunk"
import {applyMiddleware} from "redux";

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))