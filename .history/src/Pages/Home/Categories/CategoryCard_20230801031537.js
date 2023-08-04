import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const CategoryCard = ({ product, setVerify, verify }) => {
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = product
    console.log(verify)
    const url = `https://resale-market-server-wahid137.vercel.app/users?email=${email}`

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            setVerify(data)
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='h-80 overflow-hidden'>
                <img className="p-10 w-[500px] h-full" src={image} alt="" />
            </div>
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2 text-center'>Product Name: {productName}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Years Of Use: {year}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Post Time: {time}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Resale Price: {resalePrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Original Price: {originalPrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Location: {location}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                {/* {

                    user?.type === 'verified' && <div className='flex items-center justify-center'>
                        <p className=' text-xl mb-2 text-center'>Seller Name: {user?.name}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2 text-green-500 ms-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                }

                {

                    user?.type !== 'verified' && <div className='flex items-center justify-center'>
                        <p className=' text-xl mb-2 text-center'>Seller Name: {user?.name}</p>
                    </div>

                } */}

            </div>


        </div>
    );
};

export default CategoryCard;