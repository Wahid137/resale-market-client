import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrders = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    const { user } = useContext(AuthContext)
    const url = `https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?email=${user.email}`;

    const closeModal = () => {
        setDeletingUser(null)
    }

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
                <h2 className='text-2xl font-bold mb-10'>My Orders</h2>
                <table className="table w-full bg-warning border-separate border-spacing-y-5">
                    <thead>
                        <tr className='text-accent'>
                            <th>Product Name</th>
                            <th>Email ID</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td>
                                    {order.phone}
                                </td>
                                <td>{order.location}</td>

                                <td>
                                    <label onClick={() => setDeletingUser(order)} htmlFor="confirmation-modal" className='btn btn-xs btn-primary'>Delete</label>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}//
                    message={`If you delete ${deletingUser.productName} It can not be undone!`}//
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