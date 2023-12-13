import React from "react";
import ReactDOM from "react-dom"
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import store from "./app/store";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./router"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);