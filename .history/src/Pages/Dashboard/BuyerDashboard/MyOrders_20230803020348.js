import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const url = `https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?email=${user.email}`;

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>This is my orders: {orders.length}</h2>
        </div>
    );
};

export default MyOrders;