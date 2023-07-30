import React, { useContext } from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <ScrollRestoration />
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-secondary">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay bg-secondary"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content pt-32">



                        {
                            user?.uid &&
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