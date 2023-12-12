import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/reducers/authReducer";
import fileFolderReducer from "../redux/reducers/fileFolderReducer";

const rootReducer = combineReducers(
    {
        auth: authReducer,
        filefolders: fileFolderReducer
    }
)

export default rootReducer; 