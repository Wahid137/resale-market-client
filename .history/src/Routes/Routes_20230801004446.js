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
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProduct from "../Pages/Dashboard/SellerDashboard/MyProduct";
import MyBuyers from "../Pages/Dashboard/SellerDashboard/MyBuyers";
import SellerRoute from "./PrivateRoutes/SellerRoute";
import CategoryCards from "../Pages/Home/Categories/CategoryCards";

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
                path: '/category/:type',
                element: <CategoryCards></CategoryCards>,
                loader: ({ params }) => fetch()

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
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
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
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
        ]
    }
])
export default router;