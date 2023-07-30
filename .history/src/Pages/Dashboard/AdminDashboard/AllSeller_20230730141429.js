import React from 'react';
import useTitle from '../../../hooks/useTitle';

const AllSeller = () => {
    useTitle("All Seller")
    const url = `http://localhost:5000/users?role='seller'`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
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
            <h2>All seller</h2>
        </div>
    );
};

export default AllSeller;