import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const url = `https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?email=${user?.email}`

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
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
            <div className='mx-20 mt-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map((product, i) => <MyProductCard
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    ></MyProductCard>)

                }
            </div>
        </div>
    );
};

export default MyProduct;