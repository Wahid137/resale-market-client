import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const MyProductCard = ({ product, refetch }) => {
    const { productName, image, type, location, time, year, resalePrice, originalPrice } = product
    const [deletingUser, setDeletingUser] = useState(null)


    const closeModal = () => {
        setDeletingUser(null)
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
                    toast.success(`Buyer ${user?.name} deleted successfully!`)
                }
            })
    }

    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-5 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <div className='p-2'>
                <p className='font-bold text-xl mb-2 text-center'>{productName}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Years Of Use: {year}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Post Time: {time}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Resale Price: {resalePrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' text-xl mb-2 text-center'>Original Price: {originalPrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <label onClick={() => setDeletingUser(product)} htmlFor="confirmation-modal" className='btn btn-xs btn-primary'>Delete</label>

            </div>
        </div>
    );
};

export default MyProductCard;