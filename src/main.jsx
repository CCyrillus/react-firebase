import React from "react";
import ReactDOM from "react-dom"
import App from './App.jsx'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import store from "./app/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, Register, HomePage, DashboardPage } from "./Pages/index.js";
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/react-firebase/",
    element: <App />,
    children: [
      {
        path: "/react-firebase/",
        element: <HomePage />,
      },
      {
        path: "/react-firebase/login",
        element: <Login />,
      },
      {
        path: "/react-firebase/register",
        element: <Register />,
      },
      {
        path: "/react-firebase/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);