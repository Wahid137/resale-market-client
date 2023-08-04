import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedItems = () => {

    const url = `https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?situation="advertised"`

    const { data: products = [], refetch, isLoading } = useQueryErrorResetBoundary({
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
            <h2 className='text-4xl font-bold font-serif text-center' >Advertised Items</h2>
            <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <h1></h1>
            </div>
        </div>
    );
};

export default AdvertisedItems;