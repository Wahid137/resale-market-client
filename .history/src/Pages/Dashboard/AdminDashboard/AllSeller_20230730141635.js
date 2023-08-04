import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    useTitle("All Seller")
    const url = "https://resale-market-server-wahid137.vercel.app/users?role='seller'"

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
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
        <div >
            <h2>All seller: {users.length}</h2>
        </div>
    );
};

export default AllSeller;