import React, { useContext } from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <ScrollRestoration />
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side bg-warning">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay bg-secondary"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">

                        {
                            isBuyer &&
                            <>
                                <li><Link to="/dashboard/myorders" className='text-accent hover:text-secondary'>My Orders</Link></li>
                            </>

                        }


                        {

                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addproduct" className='text-accent hover:text-secondary'>Add Product</Link></li>
                                <li><Link to="/dashboard/myproduct" className='text-accent hover:text-secondary'>My Product</Link></li>
                                <li><Link to="/dashboard/mybuyers" className='text-accent hover:text-secondary'>My Buyers</Link></li>

                            </>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allseller" className='text-accent hover:text-secondary'>All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyer" className='text-accent hover:text-secondary'>All Buyer</Link></li>
                                <li><Link to="/dashboard/makeadmin" className='text-accent hover:text-secondary'>Make Admin</Link></li>
                                <li><Link to="/dashboard/reporteditems" className='text-accent hover:text-secondary'>Reported Items</Link></li>
                            </>
                        }




                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;