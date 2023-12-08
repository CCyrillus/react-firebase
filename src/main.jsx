import React from "react";
import ReactDOM from "react-dom"
import App from './App.jsx'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import store from "./redux/store.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";


const router = createBrowserRouter([
  {
    path: "/react-firebase/",
    element: <App />,
    children: [
      {
        path: "/react-firebase/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);