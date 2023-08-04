import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const MyOrders = () => {
    const [deletingUser, setDeletingUser] = useState(null)
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

    const handleDeleteUser = order => {
        console.log(order)
        fetch(`https://resale-market-server-wahid137.vercel.app/booking/${order._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${order?.productName} deleted successfully!`)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto p-7">
                <h2 className='text-2xl font-bold mb-10'>All Seller</h2>
                <table className="table w-full bg-warning border-separate border-spacing-y-5">
                    <thead>
                        <tr className='text-accent'>
                            <th>Product Name</th>
                            <th>Email ID</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, i) => <tr key={user._id}>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td>
                                    {
                                        user?.type !== 'verified' && <button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-secondary'>Verify</button>
                                    }
                                    {
                                        user?.type === 'verified' && <div className='flex items-center'>
                                            <p className='text-green-500'>Verified</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500 ms-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>


                                    }

                                </td>
                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-xs btn-primary'>Delete</label>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}//
                    message={`If you delete ${deletingUser.name} It can not be undone!`}//
                    successAction={handleDeleteUser} //pass the function
                    modalData={deletingUser}// jeta delete korbe oitar information pass hoccche modalData diye
                    successButtonName='Delete'//
                    closeModal={closeModal}// modal vanish
                ></ConfirmationModal>
            }



        </div>
    );
};

export default MyOrders;