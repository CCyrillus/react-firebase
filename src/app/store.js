
import { applyMiddleware, createStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";
import rootReducer from "./index";
import { compose } from "@reduxjs/toolkit";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;