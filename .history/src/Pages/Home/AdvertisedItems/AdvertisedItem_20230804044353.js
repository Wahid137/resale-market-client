import React from 'react';

const AdvertisedItem = ({ product }) => {
    const { image, productName, type, resalePrice, originalPrice } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='overflow-hidden'>
                <img className="w-full object-cover h-[280px]" src={image} alt="" />
            </div>
            <div className='p-2'>
                <p className='font-bold mb-2 text-center'>{productName}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className='  mb-2 text-center'>Category: {type}</p>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className='  mb-2 text-center'>Resale Price: {resalePrice} Taka</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <p className=' mb-2 text-center'>Original Price: {originalPrice} Taka</p>

            </div>
        </div>
    );
};

export default AdvertisedItem;