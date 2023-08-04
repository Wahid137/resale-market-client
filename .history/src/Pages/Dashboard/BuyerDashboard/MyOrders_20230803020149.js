import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>This is my orders</h2>
        </div>
    );
};

export default MyOrders;