import React from 'react';

const MyProductCard = ({ product }) => {
    const { productName, image, resalePrice, originalPrice } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-5 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <div className='font-bold text-xl mb-2 text-center'>
                <p >{productName}</p>
                <p className='font-bold text-xl mb-2 text-center'>{productName}</p>
                <p className='font-bold text-xl mb-2 text-center'>{productName}</p>
                <p className='font-bold text-xl mb-2 text-center'>{productName}</p>
            </div>

        </div>
    );
};

export default MyProductCard;