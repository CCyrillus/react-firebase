import { createBrowserRouter } from "react-router-dom";
import { Login, Register, HomePage, DashboardPage } from "./Pages/index.js";
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx";
import FolderComponent from "./components/DashBoardComponent/FolderComponent/FolderComponent.jsx";

import App from './App.jsx'
import Subbar from "./components/DashBoardComponent/SubBar/Subbar.jsx";

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
                // children: [{
                //     path: "",
                //     element: <HomeComponent />,
                //     children: []
                // },
                // // {
                // //     path: "",
                // //     element: <Subbar />,
                // // },
                // // {
                // //     path: "folder/:folderId",
                // //     element: <FolderComponent />,
                // // },
                // ]
            },



        ],
    },
]);

export default router;
