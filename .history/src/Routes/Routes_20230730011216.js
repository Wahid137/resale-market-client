import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AllSeller from "../Pages/Dashboard/AdminDashboard/AllSeller";
import AllBuyer from "../Pages/Dashboard/AdminDashboard/AllBuyer";
import MakeAdmin from "../Pages/Dashboard/AdminDashboard/MakeAdmin";
import ReportedItems from "../Pages/Dashboard/AdminDashboard/ReportedItems";

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
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/makeadmin',
                element: <MakeAdmin></MakeAdmin>
            }
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    }
])
export default router;