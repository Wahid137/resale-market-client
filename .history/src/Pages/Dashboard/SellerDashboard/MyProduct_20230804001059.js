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
        <div className='p-7'>
            <h2 className='text-2xl font-bold mb-10'>My Product</h2>
            <div className=" flex justify-center items-center bg-teal-50 p-10">
                <div>
                    <div className=' grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            products.map((product, i) => <MyProductCard
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            ></MyProductCard>)

                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default MyProduct;