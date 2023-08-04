import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    const url = "https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?situation=advertised"

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
        <div className='my-20'>
            <h2 className='text-4xl font-bold font-serif text-center mb-32' >Advertised Items</h2>
            <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <AdvertisedItem
                        key={product._id}
                        product={product}
                    ></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;