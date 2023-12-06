import React from "react";
import ReactDOM from "react-dom"
import App from './App.jsx'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import store from "./redux/store.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";

// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   document.getElementById('root')
// )
const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
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