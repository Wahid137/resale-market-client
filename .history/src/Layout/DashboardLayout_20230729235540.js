import React, { useContext } from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;