import React from 'react';

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
            <h2>This is My Buyers</h2>
        </div>
    );
};

export default MyBuyers;

import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyer = () => {
    const [deletingUser, setDeletingUser] = useState(null)






    const handleDeleteUser = user => {
        console.log(user)
        fetch(`https://resale-market-server-wahid137.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${user?.name} deleted successfully!`)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto p-7">
                <h2 className='text-2xl font-bold mb-10'>All Buyer</h2>
                <table className="table w-full bg-warning border-separate border-spacing-y-5">
                    <thead>
                        <tr className='text-accent'>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            buyers.map((user, i) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

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

export default AllBuyer;