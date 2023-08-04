import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    useTitle("Dashboard")

    const url = "https://resale-market-server-wahid137.vercel.app/users?role=seller"

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



    const { data: buyers = [], } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch("https://resale-market-server-wahid137.vercel.app/users?role=buyer", {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch("https://resale-market-server-wahid137.vercel.app/categories", {
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
            <div className='p-7'>
                <h2 className='text-2xl font-bold mb-10'>WelCome! to LARANA Bike Store's Dashboard</h2>
                <div className='bg-warning p-5'>

                    <div className="w-full max-w-sm mb-5">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Total Buyers: {buyers.length}</span>
                        </label>
                        <input type="range" min={0} max="100" value={buyers.length} className="range range-secondary" />
                    </div>
                    <div className="w-full max-w-sm mb-5">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Total Seller: {users.length}</span>
                        </label>
                        <input type="range" min={0} max="100" value={users.length} className="range range-secondary" />
                    </div>
                    {/*   <div className="w-full max-w-sm mb-5">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Total Product: </span>
                        </label>
                        <input type="range" min={0} max="100" value="10" className="range range-secondary" />
                    </div> */}
                    <div className="w-full max-w-sm mb-5">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Total Product Category: {categories.length}</span>
                        </label>
                        <input type="range" min={0} max="100" value={categories.length} className="range range-secondary" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Dashboard;