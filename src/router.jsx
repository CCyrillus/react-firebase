import { createBrowserRouter } from "react-router-dom";
import { Login, Register, HomePage, DashboardPage } from "./Pages/index.js";
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx";
import FolderComponent from "./components/DashBoardComponent/FolderComponent/FolderComponent.jsx";

import App from './App.jsx'

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
                path: "/react-firebase/dashboard/*",
                element: <DashboardPage />,
            },
            {
                path: "",
                element: <HomeComponent />,
            },
            
        ],
    },
]);

export default router;

