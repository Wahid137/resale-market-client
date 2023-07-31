import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    useTitle("All Seller")
    const url = "http://localhost:5000/users?role=seller"

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
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.treatName}</td>
                            <td>{booking.paymentType}</td>
                            <td>

                                {
                                    booking.approve && <button className='btn btn-success'>Done</button>
                                }
                                {
                                    !booking.approve && <button onClick={() => handleMakeAdmin(booking._id)} className='btn btn-info'>Pending</button>
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