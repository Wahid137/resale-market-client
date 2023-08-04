import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    useTitle("All Seller")
    const url = "https://resale-market-server-wahid137.vercel.app/users?role=seller"

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
        <div className="overflow-x-auto p-7">
            <h2 className='text-2xl font-bold mb-10'>Order List</h2>
            <table className="table w-full bg-secondary border-separate border-spacing-y-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Role</th>
                        <th></th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.paymentType}</td>
                            <td>

                                {
                                    user.approve && <button className='btn btn-success'>Done</button>
                                }

                            </td>
                        </tr>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;