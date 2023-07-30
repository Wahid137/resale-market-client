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
import AdminRoute from "./PrivateRoutes/AdminRoute";
import BuyerRoute from "./PrivateRoutes/BuyerRoute";
import MyOrders from "../Pages/Dashboard/BuyerDashboard/MyOrders";

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
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/makeadmin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    }
])
export default router;