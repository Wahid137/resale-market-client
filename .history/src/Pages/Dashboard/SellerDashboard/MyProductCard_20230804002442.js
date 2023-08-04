import React from 'react';

const MyProductCard = ({ product }) => {
    const { productName, image, resalePrice, originalPrice } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-2 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <p className='font-bold text-xl mb-2 text-center'>{productName}</p>

        </div>
    );
};

export default MyProductCard;