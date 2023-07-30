import React, { useContext } from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
    
    );
};

export default DashboardLayout;