import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AllSeller from "../Pages/Dashboard/AdminDashboard/AllSeller";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <DisplayError></DisplayError>

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <DisplayError></DisplayError>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            }
        ]
    }
])
export default router;