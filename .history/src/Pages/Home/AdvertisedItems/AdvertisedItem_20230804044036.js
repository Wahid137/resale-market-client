import React from 'react';

const AdvertisedItem = ({ product }) => {
    const { image, productName } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='overflow-hidden'>
                <img className="w-full object-cover h-38" src={image} alt="" />
            </div>
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2 text-center'>{productName}</p>
            </div>
        </div>
    );
};

export default AdvertisedItem;