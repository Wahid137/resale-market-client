import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    useTitle("All Seller")

    const closeModal = () => {
        setDeletingUser(null)
    }

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

    const handleMakeAdmin = id => {
        fetch(`https://resale-market-server-wahid137.vercel.app/users/admin/${id}`, {
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
            })

    }

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
                    toast.success(`User ${user?.name} deleted successfully!`)
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl'>All Seller</h2>
            <div className="overflow-x-auto p-7">
                <h2 className='text-2xl font-bold mb-10'>Order List</h2>
                <table className="table w-full bg-secondary border-separate border-spacing-y-5">
                    <thead>
                        <tr>
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
                                        user?.type !== 'verified' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Verify</button>
                                    }
                                    {
                                        user?.role === 'verified' && <p className='text-green-500'>Verified</p>
                                    }

                                </td>
                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-xs btn-danger'>Delete</label>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;