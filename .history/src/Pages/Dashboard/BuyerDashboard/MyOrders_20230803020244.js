import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const url = `https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?email=${user.email}`;
    return (
        <div>
            <h2>This is my orders</h2>
        </div>
    );
};

export default MyOrders;