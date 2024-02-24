import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const url = "https://resale-market-server-wahid137.vercel.app/dashboard/myproduct?situation=advertised"

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-20' data-aos="fade-right" data-aos-duration="1500">
            <h2 className='text-4xl font-bold font-serif text-center mb-20' >Advertised Items</h2>
            <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    items.map(item => <AdvertisedItem
                        key={item._id}
                        item={item}
                    ></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;