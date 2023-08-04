import React from 'react';

const MyProductCard = ({ product }) => {
    const { productName, image, resalePrice, originalPrice } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-5 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <div className='text-center'>
                <p className='font-bold text-xl mb-2 '>{productName}</p>
                <p className='font-bold text-xl mb-2 '>{productName}</p>
                <p className='font-bold text-xl mb-2 '>{productName}</p>
                <p className='font-bold text-xl mb-2 '>{productName}</p>
            </div>

        </div>
    );
};

export default MyProductCard;