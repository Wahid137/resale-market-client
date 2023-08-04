import React from 'react';

const MyProductCard = ({ product }) => {
    const { productName, image, type, location, time, resalePrice, originalPrice } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='mb-5 overflow-hidden'>
                <img className="w-full h-[220px]" src={image} alt="" />
            </div>
            <div className='text-center text-xl'>
                <p className='font-bold  mb-2 '>Product Name: {productName}</p>
                <p className='mb-2'>Category: {type}</p>
                <p className='mb-2'>Posted Time: {time}</p>
                <p className='mb-2'>Original Price: {originalPrice}</p>
                <p className='mb-2'>Resale Price: {resalePrice}</p>
            </div>

        </div>
    );
};

export default MyProductCard;