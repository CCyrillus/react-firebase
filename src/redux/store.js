import { applyMiddleware, createStore, combineReducers  } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";

const store = createStore(
    combineReducers({authReducer}),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;