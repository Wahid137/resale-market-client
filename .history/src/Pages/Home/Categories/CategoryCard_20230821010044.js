import React, { useState } from 'react';
import BookingModal from './BookingModal';


const CategoryCard = ({ product, setVerify, verify }) => {
    const { image, productName, location, resalePrice, originalPrice, year, time, userName, userType } = product
    const [isOpenModal, setIsModalOpen] = useState(false)




    return <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
        <div className='h-80 overflow-hidden'>
            <img className="p-10 w-[600px] h-full" src={image} alt="" />
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
            {

                userType === 'verified' && <div className='flex items-center justify-center'>
                    <p className=' text-xl mb-2 text-center'>Seller Name: {userName}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2 text-green-500 ms-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

            }

            {

                userType !== 'verified' && <div className='flex items-center justify-center'>
                    <p className=' text-xl mb-2 text-center'>Seller Name: {userName}</p>
                </div>

            }
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
            <div className="flex flex-col">
                {/* The button to open modal */}
                <label
                    htmlFor="booking-modal"
                    className="btn btn-secondary"
                    onClick={() => setIsModalOpen(true)}
                >
                    Book Now
                </label>

                <label
                    className="btn btn-secondary"
                >
                    Report This Product
                </label>
            </div>
        </div>

        <BookingModal
            isOpenModal={isOpenModal}
            setIsModalOpen={() => setIsModalOpen(!isOpenModal)}
            modalInfo={product}
        />


    </div>

    // return (
    //     <div>
    //         <h1>No data found</h1>
    //     </div>
    // );
};

export default CategoryCard;