import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const AllSeller = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    useTitle("All Seller")

    const closeModal = () => {
        setDeletingUser(null)
    }

    const url = "http://localhost:5000/users?role=seller"

    const { data: users = [], refetch, isLoading } = useQuery({
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

    const handleVerify = id => {
        console.log(id)
        /*  fetch(`http://localhost:5000/users/admin/${id}`, {
             method: 'PUT',
             headers: {
                 authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
         })
             .then(res => res.json())
             .then(data => {
                 if (data.modifiedCount > 0) {
                     toast.success('Make admin successfully')
                     refetch();
                 }
             }) */

    }

    const handleDeleteUser = user => {
        console.log(user)
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${user?.name} deleted successfully!`)
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
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Role</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user?.type !== 'verified' && <button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-secondary'>Verify</button>
                                    }
                                    {
                                        user?.type === 'verified' && <p className='text-green-500'>Verified</p>
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

export default AllSeller;