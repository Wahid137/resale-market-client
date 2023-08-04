import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const url = "https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?email=buyer"

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

    return (
        <div>
            <h2>This is my Product</h2>
        </div>
    );
};

export default MyProduct;