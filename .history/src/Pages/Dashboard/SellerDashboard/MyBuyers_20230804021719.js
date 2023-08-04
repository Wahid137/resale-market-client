import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';

const MyBuyers = () => {
    useTitle("My Buyers")


    const url = "https://resale-market-server-wahid137.vercel.app/users?role=buyer"

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
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
            <div className="overflow-x-auto p-7">
                <h2 className='text-2xl font-bold mb-10'>All Buyer</h2>
                <table className="table w-full bg-warning border-separate border-spacing-y-5">
                    <thead>
                        <tr className='text-accent'>

                            <th>No.</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            buyers.map((user, i) => <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;





