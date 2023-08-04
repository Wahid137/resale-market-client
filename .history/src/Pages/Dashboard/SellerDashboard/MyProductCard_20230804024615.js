import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProductCard = ({ product, refetch }) => {
    const { productName, image, type, time, year, resalePrice, originalPrice } = product
    const [deletingUser, setDeletingUser] = useState(null)


    const closeModal = () => {
        setDeletingUser(null)
    }


    const handleDeleteUser = user => {
        console.log(user)
        fetch(`https://resale-market-server-wahid137.vercel.app/dashboard/addproduct/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product?.productName} deleted successfully!`)
                }
            })
    }

    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-5 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <div className='p-2'>
                <p className='font-bold mb-2 text-center'>{productName}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' mb-2 text-center'>Years Of Use: {year}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className='  mb-2 text-center'>Category: {type}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' mb-2 text-center'>Post Time: {time}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className='  mb-2 text-center'>Resale Price: {resalePrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' mb-2 text-center'>Original Price: {originalPrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <div className=''>
                    <label onClick={() => setDeletingUser(product)} htmlFor="confirmation-modal" className='btn btn-sm w-1/3 btn-secondary mb-2'>Delete</label>
                    <label onClick={() => setDeletingUser(product)} htmlFor="confirmation-modal" className='btn btn-sm w-1/3 btn-secondary '>Advertised</label>
                </div>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}//
                    message={`If you delete ${deletingUser.productName} It can not be undone!`}//
                    successAction={handleDeleteUser} //pass the function
                    modalData={deletingUser}// jeta delete korbe oitar information pass hoccche modalData diye
                    successButtonName='Delete'//
                    closeModal={closeModal}// modal vanish
                ></ConfirmationModal>
            }
        </div>
    );


};

export default MyProductCard;